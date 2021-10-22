import { ReactNode } from 'hoist-non-react-statics/node_modules/@types/react';
import React from 'react';

import { SectionStyles, Title, Description } from './styles';

type Props = {
    title: string,
    children: ReactNode,
};

export function Section({ title, children }: Props) {

    return (
        <SectionStyles>
            <Title>{title}</Title>
            <Description>
                {children}
            </Description>
        </SectionStyles>
    )
}