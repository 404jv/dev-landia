import styled from 'styled-components/native';


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

export const Description = styled.Text`
    margin-right: 8px;
    margin-left: 8px;
    line-height: 20px;
`;
