import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Text = styled.Text`
    line-height: 19px;
    font-size: 16px;
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const SectionStyles = styled.View`
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 32px;
`;

export const Title = styled.Text`
    font-size: 32px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Description = styled.View`
    background-color:  ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    padding: 15px;
`;

export const Editor = styled.View`
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

export const OptionsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const OptionCode = styled.TouchableOpacity`
    min-width: 140px;
    padding: 8px;
    margin: 4px;
    background-color: #1D2326;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.border};
`

export const SectionButtons = styled.View`
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 32px;
    flex-direction: row;
    justify-content: flex-end;
`;

export const CompileButton = styled.TouchableOpacity`
    margin: 8px;
    border-radius: 50px;
    text-align: center;
    align-items: center;
`;

export const CompileIconButton = styled.View`
    width: 64px;
    height: 64px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const SeeAnswerButton = styled.TouchableOpacity`
    margin: 8px;
    border-radius: 50px;
    text-align: center;
    align-items: center;
`;

export const SeeAnswerIconButton = styled.View`
    width: 64px;
    height: 64px;
    background-color: #AD455E;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;
