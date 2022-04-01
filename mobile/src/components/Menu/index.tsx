import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { EasingNode } from "react-native-reanimated";

import { useTheme } from "styled-components";
import { MenuBar, ProgressMenuBar } from "./styles";

interface IMenuProps {
  totalActivities: number;
  progressCount: number;
  onPress: () => any;
}

export function Menu({
  totalActivities,
  progressCount,
  onPress,
}: IMenuProps): JSX.Element {
  const theme = useTheme();
  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimated = progress.interpolate({
    inputRange: [0, totalActivities],
    outputRange: [0, 274],
  });

  Animated.timing(progress, {
    toValue: progressCount,
    duration: 500,
    easing: EasingNode.linear,
  }).start();

  function handleStatusBar(): JSX.Element {
    return (
      <ProgressMenuBar style={{ borderRadius: 32 }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 32,
              backgroundColor: theme.colors.blue,
            },
            {
              width: progressAnimated,
            },
          ]}
        />
      </ProgressMenuBar>
    );
  }

  return (
    <MenuBar>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <MaterialIcons name="close" size={50} color={theme.colors.stroke} />
      </TouchableOpacity>

      {handleStatusBar()}
    </MenuBar>
  );
}
