import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import BottomBar from '../../components/BottomBar';
import Modal from '../../components/Modal';
import Maps from '../../components/Maps';
import {
  FirstQuestion,
  SecondQuestion,
} from '../../components/SteppersQuestions';
import { useUI } from '../../hooks/ui';

const Home: React.FC = () => {
  const { modalVisible } = useUI();

  return (
    <>
      <Maps />
      <BottomBar />

      <Modal show={modalVisible}>
        <SecondQuestion />
      </Modal>
    </>
  );
};

export default Home;
