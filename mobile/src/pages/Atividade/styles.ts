import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;


export const Progresso = styled.View`
    height: 80px;
    justify-content: center;
`;

export const TextMenor = styled.Text`
    line-height: 25px;
    font-size: 15px;
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.regular};
`;
export const DrawBlueBox = styled.Text`
    color: #0055A4;
`;

export const DrawRedBox = styled.Text`
    color: #EF4135;
`;

export const NewLine = styled.Text`
    color: #169E96;
`;

export const SectionStyles = styled.View`
    margin: 15px;
`;

export const Title = styled.Text`
    font-size: 32px;
    color: #36B1BF;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Description = styled.View`
    background-color: #1D2326;
    border-radius: 10px;
    margin-top: 15px;
    padding: 15px;
`;

export const Bash = styled.View`
    margin: 15px;
`;