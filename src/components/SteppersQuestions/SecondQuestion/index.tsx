import React from 'react';
import {
  Container,
  TitlePage,
  TitleQuestion,
  Box,
  ChooseButton,
  ChooseText,
} from '../styles';
import Button from '../../Button';
import ArrowLeft from '../../Icons/ArrowLeft';

const SecondQuestion: React.FC = () => (
  <Container>
    <ArrowLeft />
    <TitlePage>Nos ajude a entender melhor a situação do incêndio 🤔</TitlePage>
    <Box>
      <TitleQuestion>Qual a proporção do incêndio?</TitleQuestion>
      <ChooseButton>
        <ChooseText>Baixa, o foco está em um lugar</ChooseText>
      </ChooseButton>
      <ChooseButton selected>
        <ChooseText selected>Alta, está se alastrando</ChooseText>
      </ChooseButton>
    </Box>
    <Button disabled>Continuar</Button>
  </Container>
);
export default SecondQuestion;
