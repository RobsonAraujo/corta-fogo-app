import React, { useState, useCallback } from 'react';
import { View, Text, Image, Dimensions, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Button from '../Button';
import steppers from '../../constants/steppers';
import { useUI } from '../../hooks/UI';
import { useReportInfo } from '../../hooks/reportInfo';
import {
  Container,
  Preview,
  ButtonTakePicture,
  ContainerButton,
  ContainerLoading,
  TextAnalising,
} from './styles';
import CameraImage from '../../assets/camera.png';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

const Camera: React.FC = () => {
  const { handleStepper } = useUI();
  const { data, handleReportData } = useReportInfo();
  const [viewImage, setViewImage] = useState(false);
  const [isValidImage, setIsValidImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tryNumber, setTryNumber] = useState(1);

  const takePicture = useCallback(async camera => {
    const options = { quality: 0.5, base64: true };
    const pictureData = await camera.takePictureAsync(options);

    setIsLoading(true);
    setViewImage(true);
    handleReportData({
      ...data,
      picture: pictureData.uri,
      isValidPicture: true,
    });

    setTimeout(function () {
      setIsLoading(false);
      if (tryNumber !== 1) {
        setIsValidImage(true);
        setTryNumber(tryNumber + 1);
      } else {
        setIsValidImage(false);
        setTryNumber(tryNumber + 1);
      }
    }, 3000);
  }, []);

  return (
    <Container>
      {viewImage ? (
        <>
          <Image
            source={{
              uri: data.picture,
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
          />
          {isLoading && (
            <ContainerLoading>
              <TextAnalising>Estamos analisanto a imagem</TextAnalising>
              <ActivityIndicator size="large" color="#F2994A" />
            </ContainerLoading>
          )}

          <ContainerButton>
            <Button
              onPress={() =>
                data.isValidPicture && handleStepper(steppers.reportResume)
              }
              disabled={isLoading}
            >
              Continuar
            </Button>
          </ContainerButton>
        </>
      ) : (
        <Preview
          ref={ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <ButtonTakePicture onPress={() => takePicture(camera)}>
                  <Image
                    style={{ width: 80, height: 80 }}
                    source={CameraImage}
                  />
                </ButtonTakePicture>
              </View>
            );
          }}
        </Preview>
      )}
    </Container>
  );
};

export default Camera;
