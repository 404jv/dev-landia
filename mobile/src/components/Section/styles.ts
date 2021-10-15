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
    background-color:  ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    padding: 15px;
`;
