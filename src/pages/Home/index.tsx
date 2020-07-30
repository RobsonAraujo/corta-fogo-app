import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import BottomBar from '../../components/BottomBar';
import Modal from '../../components/Modal';
import Maps from '../../components/Maps';
import {
  FirstQuestion,
  SecondQuestion,
} from '../../components/SteppersQuestions';
import { useMapInteration } from '../../hooks/mapInteration';

const Home: React.FC = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Maps />
      <BottomBar />
      {/* <TouchableOpacity
        style={{
          height: 50,
          borderRadius: 10,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          width: 300,
          marginTop: 20,
        }}
        onPress={() => setModal(true)}
      >
        <Text>Open Modal</Text>
      </TouchableOpacity> */}
      <Modal show={modal} close={() => setModal(false)}>
        {/* <FirstQuestion />
         */}
        <SecondQuestion />
      </Modal>
    </>
  );
};

export default Home;
