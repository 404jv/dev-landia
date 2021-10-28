import { Feather } from '@expo/vector-icons';
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
    margin-left: 8px;
    margin-right: 8px;
    line-height: 20px;
`;

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

//Modal//

export const ModalContainer = styled.View`
    margin: 10px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
`;
export const ModalHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;
export const ModalIcon = styled(Feather)`
    font-size: 40px;
    color: #2D3235;
`;
export const ModalTitle = styled.Text`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const ModalContentText = styled.Text`
    font-size: 16px;
    color: #fff;
`;
export const ModalButton = styled.TouchableOpacity`
    align-items: center;
    margin-top: 8px;
`;
export const ModalButtonText = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
`;
