import React from "react";

import trophyPng from "../../../assets/trophy.png";
import { ChallengeBar } from "../ChallengeBar";

import {
  ChallengeCard,
  ChallengeContent,
  ChallengeDescription,
  ChallengeImage,
  ChallengeTitle,
  Image,
} from "./styles";

interface ChallengeCardProps {
  data: {
    title: string;
    description: string;
    currentChallenge: number;
    maxChallenge: number;
  };
}

export function ChallengeCards({ data }: ChallengeCardProps): JSX.Element {
  return (
    <ChallengeCard>
      <ChallengeImage>
        <Image source={trophyPng} />
      </ChallengeImage>

      <ChallengeContent>
        <ChallengeTitle>{data.title}</ChallengeTitle>
        <ChallengeDescription>{data.description}</ChallengeDescription>

        <ChallengeBar
          currentChallenge={data.currentChallenge}
          maxChallenge={data.maxChallenge}
        />
      </ChallengeContent>
    </ChallengeCard>
  );
}
