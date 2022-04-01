import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #93d333;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #93d333;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 16px;
  height: 45px;
`;

export const ModalTextButton = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
