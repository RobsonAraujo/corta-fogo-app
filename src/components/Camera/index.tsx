import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Button from '../Button';
import steppers from '../../constants/steppers';
import { useUI } from '../../hooks/UI';
import { useReportInfo } from '../../hooks/reportInfo';

const Camera: React.FC = () => {
  const { handleStepper } = useUI();
  const { data } = useReportInfo();

  // TODO - mock
  data.isValidPicture = true;
  return (
    <View>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
      />
      <Button
        onPress={() =>
          data.isValidPicture && handleStepper(steppers.reportResume)
        }
        disabled={!data.isValidPicture}
      >
        Continuar
      </Button>
    </View>
  );
};

export default Camera;
