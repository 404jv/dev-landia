import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    width: 75%;
    background-color: ${({ theme }) => theme.colors.white};
    height: 55px;
    padding: 0px 10px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const SignInIcon = styled.Image``;

export const Title = styled.Text`
    font-size: 17px;
`;