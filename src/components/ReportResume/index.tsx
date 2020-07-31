import React from 'react';
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

const ReportResume: React.FC = () => {
  const {
    data: { location, Q1answerChoosed, Q2answerChoosed },
  } = useReportInfo();

  return (
    <Container>
      <ArrowLeft />
      <TitlePage>Resumo da sua denúncia 😀</TitlePage>
      <Box>
        <ContainerTextInput>
          <Title>Local do incêndio</Title>
          <Subtitle>{location ? location.city : 'Amazonia'}</Subtitle>
        </ContainerTextInput>
        <ContainerTextInput>
          <Title>Onde ocorre o foco do incêndio?</Title>
          <Subtitle>{Q1answerChoosed}</Subtitle>
        </ContainerTextInput>
        <ContainerTextInput>
          <Title>Qual a proporção do incêndio?</Title>
          <Subtitle>{Q2answerChoosed}</Subtitle>
        </ContainerTextInput>
        <Title style={{ marginTop: 16, marginBottom: 16 }}>
          Foto do incêndio
        </Title>
        <ContainerPicture>
          <Image
            source={{
              width: 51,
              height: 82,
              uri:
                'https://ipam.org.br/wp-content/uploads/2019/07/P1050566.jpg',
            }}
          />
          <BoxPictureActions>
            <TouchableOpacity>
              <GreenText>👀 Ver a foto</GreenText>
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

      <Button disabled={false}>Continuar</Button>
    </Container>
  );
};

export default ReportResume;
