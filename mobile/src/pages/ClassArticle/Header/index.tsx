import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import { TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";
import { useTheme } from "styled-components";
import { MenuBar } from "./styles";

type Props = {
  title: string;
};

export function Header({ title }: Props): JSX.Element {
  const theme = useTheme();

  return (
    <MenuBar>
      <TouchableOpacity activeOpacity={0.7}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          color={theme.colors.stroke}
        />
      </TouchableOpacity>

      <Title>{title}</Title>
    </MenuBar>
  );
}
