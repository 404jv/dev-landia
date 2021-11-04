import styled from "styled-components/native"

export const ContainerScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`
export const Content = styled.ScrollView`
  margin-bottom: 32px;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;
