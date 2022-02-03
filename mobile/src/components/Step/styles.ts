import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100px;
    height: 100px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.View`
    border-radius: 100px;
    background-color: #1D2326;
    position: absolute;
    padding: 24px;
`;

export const Level = styled.View`
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #2F3437;
    border-radius: 100px;
    border-width: 1px;
    border-color: #1D2326;
    left: 65px;
    top: 65px;
`;

export const LevelText = styled.Text`
    font-size: 16px;
    color: #fff;
    font-family: ${({theme}) => theme.fonts.regular};
`;



export const LevelName = styled.Text`
    color: #fff;
    margin-top: 5px;
`;

export const StepLevel = styled.TouchableOpacity`
    flex-direction: column;
    align-items: center;
`;
