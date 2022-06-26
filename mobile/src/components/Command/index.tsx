import React, { ReactNode } from "react";
import { View } from "react-native";

import { BashText, Box, NewLine } from "./styles";

interface ICommandProps {
  commandName: string;
  commandAbstractedName: string;
  color?: string;
}

interface ICommands {
  drawBlueBox: () => ReactNode;
  drawRedBox: () => ReactNode;
  drawBlackBox: () => ReactNode;
  drawOrangeBox: () => ReactNode;
  drawWhiteBox: () => ReactNode;
  drawGreenBox: () => ReactNode;
  drawDarkGreenBox: () => ReactNode;
  drawPurpleBox: () => ReactNode;
  drawYellowBox: () => ReactNode;
  newLine: () => ReactNode;
  drawBox: () => ReactNode;
}

export function Command({
  commandName,
  color,
  commandAbstractedName,
}: ICommandProps): JSX.Element {
  const commands: ICommands = {
    drawBlueBox: () => <Box bgColor="#0000FF" />,
    drawRedBox: () => <Box bgColor="#FF0000" />,
    drawBlackBox: () => <Box bgColor="#1a1919" />,
    drawOrangeBox: () => <Box bgColor="#ff5e00" />,
    drawWhiteBox: () => <Box bgColor="#FFF" />,
    drawGreenBox: () => <Box bgColor="#67E3BB" />,
    drawDarkGreenBox: () => <Box bgColor="#025105" />,
    drawPurpleBox: () => <Box bgColor="#800080" />,
    drawYellowBox: () => <Box bgColor="#FFFF00" />,
    drawBox: () => <Box bgColor={color} />,

    newLine: () => <NewLine />,
  };

  let command = commands[commandAbstractedName];

  if (command === undefined) {
    command = function showTextOnBash() {
      return <BashText>{`${commandName} `}</BashText>;
    };
  }

  return <View>{command()}</View>;
}
