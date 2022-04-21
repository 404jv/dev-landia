import React, { ReactNode } from "react";
import { View } from "react-native";

import { Box, NewLine } from "./styles";

interface ICommandProps {
  commandName: string;
  color: string;
}

interface ICommands {
  drawBlueBox: () => ReactNode;
  drawRedBox: () => ReactNode;
  drawWhiteBox: () => ReactNode;
  drawGreenBox: () => ReactNode;
  drawPurpleBox: () => ReactNode;
  drawYellowBox: () => ReactNode;
  newLine: () => ReactNode;
  // drawBox: () => ReactNode;
}

export function Command({ commandName, color }: ICommandProps): JSX.Element {
  const commands: ICommands = {
    drawBlueBox: () => <Box bgColor={color} />,
    drawRedBox: () => <Box bgColor={color} />,
    drawWhiteBox: () => <Box bgColor={color} />,
    drawGreenBox: () => <Box bgColor={color} />,
    drawPurpleBox: () => <Box bgColor={color} />,
    drawYellowBox: () => <Box bgColor={color} />,

    newLine: () => <NewLine />,
  };

  const command = commands[commandName];
  return <View>{command() || <View />}</View>;
}
