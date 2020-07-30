import React from 'react';
import { View, Image } from 'react-native';
import fireImage from '../../assets/fire.png';

import {
  Container,
  ContainerBottomBarInfo,
  Title,
  Location,
  ReportButton,
  ReportText,
} from './styles';

// interface BottomBarProps {}

const BottomBar: React.FC = () => (
  <Container>
    <ContainerBottomBarInfo>
      <View>
        <Title>Você está em:</Title>
        <Location>Amazonas</Location>
      </View>
      <ReportButton>
        <Image source={fireImage} />
        <ReportText>Denunciar</ReportText>
      </ReportButton>
    </ContainerBottomBarInfo>
  </Container>
);

export default BottomBar;
