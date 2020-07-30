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

const FirstQuestion: React.FC = () => (
  <Container>
    <TitlePage>Nos ajude a entender melhor a situação do incêndio 🤔</TitlePage>
    <Box>
      <TitleQuestion>Qual a proporção do incêndio?</TitleQuestion>
      <ChooseButton>
        <ChooseText>Queima de materiais</ChooseText>
      </ChooseButton>
      <ChooseButton selected>
        <ChooseText selected>Em árvores</ChooseText>
      </ChooseButton>
    </Box>
    <Button disabled>Continuar</Button>
  </Container>
);
export default FirstQuestion;
