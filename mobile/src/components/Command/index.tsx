import React from 'react';
import { View } from "react-native";
import { Activity } from "../../pages/Activity";

interface ICommandProps {
  commandName: string;
}

interface ICommands {
  drawBlueBox: Function;
  drawRedBox: Function;
  drawWhiteBox: Function;
  newLine: Function;
}

export function Command({ commandName }: ICommandProps) {

  const commands: ICommands = {
    drawBlueBox: function()  {
      return (
        <View style={{
          width: 17,
          height: 17,
          backgroundColor: '#0055A4',
        }}></View>
      );
    },
    drawRedBox: function()  {
      return (
        <View style={{
          width: 17,
          height: 17,
          backgroundColor: '#EF4135',
        }}></View>
      );
    },
    drawWhiteBox: function()  {
      return (
        <View style={{
          width: 17,
          height: 17,
          backgroundColor: '#FFF',
        }}></View>
      );
    },
    newLine: function()  {
      return (
        <View style={{
          width: 995,
        }}></View>
      );
    }
  }

  const handleCommand: Function = commands[commandName];

  return (
    <View>
      { handleCommand ? handleCommand() : <View></View> }
    </View>
  );
}
