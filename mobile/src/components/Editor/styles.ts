import styled from 'styled-components/native';

export const EditorContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 120px;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const OptionEditorCodeOneLine = styled.TouchableOpacity`
  margin: 2px;
  border-radius: 8px;
  min-height: 24px;
  flex-direction: row;
  align-items: center;
`

export const OptionEditorCodeMultiLine = styled.TouchableOpacity`
  margin: 2px;
  border-radius: 8px;
  min-height: 24px;
`

export const OptionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const OptionCode = styled.TouchableOpacity`
  min-width: 140px;
  min-height: 44px;
  padding: 8px;
  margin: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
`
export const Variable = styled.TextInput`
  font-size: 16px;
  height: 100%;
  color: #E5BF2F;
  text-align: center;
`;

export const Value = styled.TextInput`
  font-size: 16px;
  height: 100%;
  color: #FFFFFF;
  text-align: center;
`;


export const NormalText = styled.Text`
  font-size: 16px;
  color: #45A7AD;
`;

export const ValueForVariable = styled.Text`
  font-size: 16px;
  color: #FFFFFF;
`;
