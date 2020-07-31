import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import BottomBar from '../../components/BottomBar';
import Modal from '../../components/Modal';
import Maps from '../../components/Maps';
import {
  FirstQuestion,
  SecondQuestion,
} from '../../components/SteppersQuestions';
import Camera from '../../components/Camera';
import ReportResume from '../../components/ReportResume';
import { useUI } from '../../hooks/UI';
import steppers from '../../constants/steppers';

const Home: React.FC = () => {
  const { modalVisible, stepper } = useUI();

  return (
    <>
      <Maps />
      <BottomBar />
      {/* //show={modalVisible} */}

      <Modal show={modalVisible}>
        {stepper === steppers.Q1 && <FirstQuestion />}
        {stepper === steppers.Q2 && <SecondQuestion />}
        {stepper === steppers.reportResume && <ReportResume />}
      </Modal>
      {stepper === steppers.camera && <Camera />}
    </>
  );
};

export default Home;
