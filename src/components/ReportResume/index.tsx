import React, { useCallback } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  TitlePage,
  Container,
  Box,
  ContainerTextInput,
  Title,
  Subtitle,
  ContainerPicture,
  BoxPictureActions,
  GreenText,
  RedText,
} from './styles';
import ArrowLeft from '../Icons/ArrowLeft';
import Button from '../Button';
import { useReportInfo } from '../../hooks/reportInfo';
import { useUI } from '../../hooks/UI';
import { useMapInteration } from '../../hooks/mapInteration';
import steppers from '../../constants/steppers';

const ReportResume: React.FC = () => {
  const {
    data: { location, Q1answerChoosed, Q2answerChoosed, picture },
    handleReportData,
  } = useReportInfo();

  const { handleStepper, handleModal } = useUI();
  const {
    handleTempLocationReport,
    tempLocationReport,
    markersList,
    setMarkersList,
  } = useMapInteration();

  const handleSuccess = useCallback(async () => {
    handleStepper(steppers.success);

    setTimeout(async () => {
      //close modal
      await handleModal(false);
      // clean report data
      await handleReportData({});
      // Set new report
      setMarkersList([
        ...markersList,
        {
          latitude: tempLocationReport.latitude,
          longitude: tempLocationReport.longitude,
        },
      ]);
      // clean temporary report

      handleTempLocationReport(null);
      // set stepper to Q1
      handleStepper(steppers.Q1);
    }, 1800);
  }, []);

  return (
    <Container>
      <ArrowLeft />
      <TitlePage>Resumo da sua denúncia 😀</TitlePage>
      <Box>
        <ContainerTextInput>
          <Title>Local do incêndio</Title>
          <Subtitle>{location ? location.city : 'Itaquera'}</Subtitle>
        </ContainerTextInput>
        <ContainerTextInput>
          <Title>Onde ocorre o foco do incêndio?</Title>
          <Subtitle>{Q1answerChoosed}</Subtitle>
        </ContainerTextInput>
        <ContainerTextInput bottom>
          <Title>Qual a proporção do incêndio?</Title>
          <Subtitle>{Q2answerChoosed}</Subtitle>
        </ContainerTextInput>
        <Title style={{ marginTop: 16, marginBottom: 16 }}>
          Foto do incêndio
        </Title>
        <ContainerPicture>
          <Image
            source={{
              width: 100,
              height: 100,
              uri: picture,
            }}
          />
          <BoxPictureActions>
            <TouchableOpacity>
              <>
                <GreenText>👀 Ver a foto</GreenText>
              </>
            </TouchableOpacity>
            <TouchableOpacity>
              <GreenText>📸 Tirar outra foto</GreenText>
            </TouchableOpacity>
            <TouchableOpacity>
              <RedText>Deletar</RedText>
            </TouchableOpacity>
          </BoxPictureActions>
        </ContainerPicture>
      </Box>

      <Button disabled={false} onPress={handleSuccess}>
        Continuar
      </Button>
    </Container>
  );
};

export default ReportResume;
