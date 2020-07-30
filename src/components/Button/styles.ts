import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 272px;
  height: 48px;
  background: ${({ disabled }) => (disabled ? '#BDBDBD' : '#F2994A')};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: Roboto-Regular;
  color: white;
  font-size: 18px;
`;
