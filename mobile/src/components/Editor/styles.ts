import styled from 'styled-components/native';

export const EditorContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 120px;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const OptionEditorCode = styled.TouchableOpacity`
  margin: 2px;
  border-radius: 8px;
`
