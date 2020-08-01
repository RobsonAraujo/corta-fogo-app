import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background: black;
`;

export const Preview = styled(RNCamera)`
  flex: 1;
`;

export const ButtonTakePicture = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
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

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 200;
  right: 0;
  left: 0;
`;

export const TextAnalising = styled.Text`
  color: white;
  margin-bottom: 20px;
`;
