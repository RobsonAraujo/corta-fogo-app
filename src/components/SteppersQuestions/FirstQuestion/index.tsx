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
import { useReportInfo } from '../../../hooks/reportInfo';
import steppers from '../../../constants/steppers';
import { useUI } from '../../../hooks/UI';

const FirstQuestion: React.FC = () => {
  const { title, answer1, answer2 } = Question.q1;

  const { data, handleReportData } = useReportInfo();
  const { handleStepper } = useUI();

  return (
    <Container>
      <ArrowLeft />
      <TitlePage>
        Nos ajude a entender melhor a situação do incêndio 🤔
      </TitlePage>
      <Box>
        <TitleQuestion>{title}</TitleQuestion>
        <ChooseButton
          selected={data.Q1answerChoosed === answer1}
          onPress={() =>
            handleReportData({ ...data, Q1answerChoosed: answer1 })
          }
        >
          <ChooseText selected={data.Q1answerChoosed === answer1}>
            {answer1}
          </ChooseText>
        </ChooseButton>
        <ChooseButton
          selected={data.Q1answerChoosed === answer2}
          onPress={() =>
            handleReportData({ ...data, Q1answerChoosed: answer2 })
          }
        >
          <ChooseText selected={data.Q1answerChoosed === answer2}>
            {answer2}
          </ChooseText>
        </ChooseButton>
      </Box>
      <Button
        onPress={() => data.Q1answerChoosed && handleStepper(steppers.Q2)}
        disabled={!data.Q1answerChoosed}
      >
        Continuar
      </Button>
    </Container>
  );
};
export default FirstQuestion;
