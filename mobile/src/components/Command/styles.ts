import styled from 'styled-components/native';

type BoxProps = {
    bgColor: string;
}

export const Box = styled.View<BoxProps>`
    width: 17px;
    height: 17px;
    background-color: ${({ bgColor }) => bgColor};
`;

export const NewLine = styled.View`
    width: 995px;
`;