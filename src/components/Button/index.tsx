import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, ...rest }) => (
  <Container disabled={disabled} {...rest}>
    <ButtonText disabled={disabled}>{children}</ButtonText>
  </Container>
);

export default Button;
