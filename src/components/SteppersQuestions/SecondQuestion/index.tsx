import React from 'react';
import { View } from 'react-native';
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
  const { title, answer1, answer2, answer3 } = Question.q2;

  const { data, handleReportData } = useReportInfo();
  const { handleStepper } = useUI();

  return (
    <Container>
      <ArrowLeft />
      <TitlePage>
        Nos ajude a entender melhor a situação do incêndio 🤔
      </TitlePage>
      <Box>
        <View>
          <TitleQuestion>{title}</TitleQuestion>
          <ChooseButton
            selected={data.Q2answerChoosed === answer1}
            onPress={() =>
              handleReportData({ ...data, Q2answerChoosed: answer1 })
            }
          >
            <ChooseText selected={data.Q2answerChoosed === answer1}>
              {answer1}
            </ChooseText>
          </ChooseButton>
          <ChooseButton
            selected={data.Q2answerChoosed === answer2}
            onPress={() =>
              handleReportData({ ...data, Q2answerChoosed: answer2 })
            }
          >
            <ChooseText selected={data.Q2answerChoosed === answer2}>
              {answer2}
            </ChooseText>
          </ChooseButton>

          <ChooseButton
            selected={data.Q2answerChoosed === answer3}
            onPress={() =>
              handleReportData({ ...data, Q2answerChoosed: answer3 })
            }
          >
            <ChooseText selected={data.Q2answerChoosed === answer3}>
              {answer3}
            </ChooseText>
          </ChooseButton>
        </View>
        <Button
          onPress={() => data.Q2answerChoosed && handleStepper(steppers.camera)}
          disabled={!data.Q2answerChoosed}
        >
          Continuar
        </Button>
      </Box>
    </Container>
  );
};
export default FirstQuestion;
