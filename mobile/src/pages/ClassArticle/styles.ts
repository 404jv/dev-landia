import styled from "styled-components/native"

export const ContainerScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`
export const Content = styled.ScrollView`
  margin-bottom: 32px;
`
