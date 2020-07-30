import React from 'react';
import { Image } from 'react-native';
import angleLeft from '../../../assets/angle-left.png';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 0px;
`;

const ArrowLeft: React.FC = () => (
  <Container>
    <Image source={angleLeft} />
  </Container>
);

export default ArrowLeft;
