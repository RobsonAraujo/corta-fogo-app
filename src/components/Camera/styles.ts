import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: black;
`;

export const Preview = styled(RNCamera)`
  flex: 1;
  border: 1px solid red;
`;

export const ButtonTakePicture = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  border: 1px solid green;
  padding-bottom: 40px;
  align-items: center;
  justify-content: flex-end;
`;

export const ContainerButton = styled.View`
  position: absolute;
  bottom: 40;
  left: 0;
  right: 0;
  align-items: center;
`;
