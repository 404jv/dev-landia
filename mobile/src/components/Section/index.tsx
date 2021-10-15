import React from 'react';

import { SectionStyles, Title, Description } from './styles';

type Props = {
    title: string,
    children: JSX.Element,
};

export function Section({ title, children }: Props){

    return(
        <SectionStyles>
            <Title>{title}</Title>
            <Description>
                {children}
            </Description>
        </SectionStyles>
    )
}