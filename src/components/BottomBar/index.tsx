import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import fireImage from '../../assets/fire.png';
import checkImage from '../../assets/check.png';

import {
  Container,
  ContainerBottomBarInfo,
  Title,
  Location,
  ReportButton,
  ReportText,
  ContainerBottomBarConfirmReport,
  ConfirmReportButton,
  ConfirmReportText,
  CancellReportButton,
  CancellReportText,
  Box,
} from './styles';

// interface BottomBarProps {}

const BottomBar: React.FC = () => {
  const [confirmReportView, setConfirmReportView] = useState(true);

  return (
    <Container>
      {confirmReportView ? (
        <ContainerBottomBarConfirmReport>
          <Title>É nesse local que está pegando fogo?</Title>
          <Box>
            <CancellReportButton>
              <CancellReportText>Cancelar a denúncia</CancellReportText>
            </CancellReportButton>
            <ConfirmReportButton>
              <Image source={checkImage} />
              <ConfirmReportText>Sim</ConfirmReportText>
            </ConfirmReportButton>
          </Box>
        </ContainerBottomBarConfirmReport>
      ) : (
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
      )}
    </Container>
  );
};

export default BottomBar;
