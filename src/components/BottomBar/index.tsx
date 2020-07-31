import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import fireImage from '../../assets/fire.png';
import checkImage from '../../assets/check.png';
import { useMapInteration } from '../../hooks/mapInteration';
import { useUI } from '../../hooks/UI';

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
  const { tempLocationReport, handleTempLocationReport } = useMapInteration();

  const { handleModal } = useUI();

  return (
    <Container>
      {tempLocationReport ? (
        <ContainerBottomBarConfirmReport>
          <Title>É nesse local que está pegando fogo?</Title>
          <Box>
            <CancellReportButton onPress={() => handleTempLocationReport(null)}>
              <CancellReportText>Cancelar a denúncia</CancellReportText>
            </CancellReportButton>
            <ConfirmReportButton onPress={() => handleModal(true)}>
              <Image source={checkImage} />
              <ConfirmReportText>Sim</ConfirmReportText>
            </ConfirmReportButton>
          </Box>
        </ContainerBottomBarConfirmReport>
      ) : (
        <ContainerBottomBarInfo>
          <View>
            <Title>Você está em:</Title>
            <Location>Itaquera</Location>
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
