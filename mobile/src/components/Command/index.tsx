import React, { ReactNode } from 'react';
import { Text, View } from "react-native";
import { Activity } from "../../pages/Activity";

interface ICommandProps {
  commandName: string;
}

interface ICommands {
  drawBlueBox: () => ReactNode;
  drawRedBox: () => ReactNode;
  drawWhiteBox: () => ReactNode;
  newLine: () => ReactNode;
  for: () => ReactNode;
}

export function Command({ commandName }: ICommandProps) {

  const commands: ICommands = {
    drawBlueBox: () => {
      return (
        <View style={{
          width: 17,
          height: 17,
          backgroundColor: '#0055A4',
        }}></View>
      );
    },
    drawRedBox: () => {
      return (
        <View style={{
          width: 17,
          height: 17,
          backgroundColor: '#EF4135',
        }}></View>
      );
    },
    drawWhiteBox: () => {
      return (
        <View style={{
          width: 17,
          height: 17,
          backgroundColor: '#FFF',
        }}></View>
      );
    },
    newLine: () => {
      return (
        <View style={{
          width: 995,
        }}></View>
      );
    },
    for: () => {
      return (
        <View>
          <Text>For</Text>
        </View>
      );
    }
  }

  const command = commands[commandName]();

  return (
    <View>
      {command ? command : <View></View>}
    </View>
  );
}
