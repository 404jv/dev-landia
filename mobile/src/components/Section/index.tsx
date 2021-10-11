import React, { ComponentProps } from 'react';

import { Text } from 'react-native';

import { SectionStyles, Title, Description } from './styles';

interface SectionProps {
    title: string,
    descriptions: string[];
}

export function Section({title, descriptions}:SectionProps){

    return(
        <SectionStyles>
            <Title>{title}</Title>
            <Description>
                {descriptions.map(description => {
                    <Text>{description}</Text>
                })}
            </Description>
        </SectionStyles>
    )
}