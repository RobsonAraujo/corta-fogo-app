import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 88px;
  background: #ffffff;
  box-shadow: 0px -2px 8px rgba(51, 51, 51, 0.08);
  border-top-left-radius: 16;
  border-top-right-radius: 16;
  position: absolute;
  bottom: 0;
`;

export const ContainerBottomBarInfo = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;
export const ContainerBottomBarConfirmReport = styled.View``;

export const Title = styled.Text`
  color: #333333;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  font-family: Roboto-Regular;
`;

export const Location = styled.Text`
  color: #333333;
  font-size: 24px;
  line-height: 28px;
  font-family: Roboto-Bold;
`;

export const ReportButton = styled(RectButton)`
  width: 129px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ReportText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #f2994a;
  Roboto-Regular
`;
