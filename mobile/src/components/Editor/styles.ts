import styled from 'styled-components/native';

export const EditorContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  min-height: 120px;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
  border: 2px solid ${({ theme }) => theme.colors.stroke};
`;

export const OptionEditorCode = styled.TouchableOpacity`
  margin: 2px;
  border-radius: 8px;
  min-height: 24px;
`

export const OptionsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const OptionCode = styled.TouchableOpacity`
  min-width: 140px;
  min-height: 44px;
  padding: 8px;
  margin: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.stroke};
`;