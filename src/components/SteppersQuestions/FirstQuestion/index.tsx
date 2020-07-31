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
import Question from '../../../constants/questions';

const FirstQuestion: React.FC = () => (
  <Container>
    <ArrowLeft />
    <TitlePage>Nos ajude a entender melhor a situação do incêndio 🤔</TitlePage>
    <Box>
      <TitleQuestion>{Question.q1.title}</TitleQuestion>
      <ChooseButton>
        <ChooseText>{Question.q1.answer1}</ChooseText>
      </ChooseButton>
      <ChooseButton selected>
        <ChooseText selected>{Question.q1.answer2}</ChooseText>
      </ChooseButton>
    </Box>
    <Button disabled>Continuar</Button>
  </Container>
);
export default FirstQuestion;
