import styled from "styled-components/native"

export const ContainerScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`
export const Content = styled.ScrollView`
  margin-bottom: 32px;
`
export const FinishButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 16px;
  height: 45px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
  letter-spacing: 2px;
`;
