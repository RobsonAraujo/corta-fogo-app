import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export const TitlePage = styled.Text`
  font-family: Roboto-Bold;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #333333;
  margin-top: 68px;
`;

export const TitleQuestion = styled.Text`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #f2994a;
  margin-bottom: 18px;
`;

export const Box = styled.View`
  margin-top: 50px;
  height: 400px;
  align-items: center;
  justify-content: space-around;
`;

export const ChooseButton = styled.TouchableOpacity`
  width: 272px;
  height: 48px;
  background: ${({ selected }) => (selected ? '#f2994a' : '#ffffff')};
  border: 1px solid #bdbdbd;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const ChooseText = styled.Text`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ selected }) => (selected ? 'white' : '#828282')};
`;
