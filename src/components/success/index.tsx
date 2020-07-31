import React from 'react';
import { Image } from 'react-native';
import SuccessImage from '../../assets/success.png';

import { Text, Container } from './styles';

const Success: React.FC = () => (
  <Container>
    <Image source={SuccessImage} />
    <Text>Denúncia feita com sucesso</Text>
  </Container>
);

export default Success;
