import React, { ReactNode } from 'react';
import { Text, View } from "react-native";
import { useTheme } from 'styled-components';
import { Activity } from "../../pages/Activity";

import {
    Box,
    NewLine,
} from './styles';

interface ICommandProps {
    commandName: string;
    color: string,
}

interface ICommands {
    drawBlueBox: () => ReactNode;
    drawRedBox: () => ReactNode;
    drawWhiteBox: () => ReactNode;
    newLine: () => ReactNode;
    // drawBox: () => ReactNode;
}

export function Command({ commandName, color }: ICommandProps) {

    const theme = useTheme();

    const commands: ICommands = {
        drawBlueBox: () => <Box bgColor={theme.colors.bash.blue} />,
        drawRedBox: () => <Box bgColor={theme.colors.bash.red} />,
        drawWhiteBox: () => <Box bgColor={theme.colors.bash.white} />,
        newLine: () => <NewLine />,
        // drawBox: () => <Box bgColor={color} />,
    }

    const command = commands[commandName]();

    return (
        <View>
            {command ? command : <View></View>}
        </View>
    );
}
