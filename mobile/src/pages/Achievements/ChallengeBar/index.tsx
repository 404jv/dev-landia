import React from 'react';

import {
    ProgressBar,
    ProgressBarSize,
    Container,
    BarText,
} from './styles';


interface ChallengeBarProps {
    currentChallenge: number,
    maxChallenge: number,
}

export function ChallengeBar({ currentChallenge, maxChallenge }: ChallengeBarProps) {

    const size = (currentChallenge * 100) / maxChallenge

    return (
        <Container>
            <ProgressBar>
                <ProgressBarSize size={size} />
            </ProgressBar>

            <BarText>{currentChallenge}/{maxChallenge}</BarText>
        </Container>
    );
}