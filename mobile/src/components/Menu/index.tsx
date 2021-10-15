import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { EasingNode } from "react-native-reanimated";

import { MenuBar, ProgressMenuBar } from "./styles";

import theme from '../../Global/styles/theme';

interface IMenuProps {
  totalActivities: number;
  progressCount: number;
}

export function Menu({ totalActivities, progressCount }: IMenuProps) {
	const [progress, setProgress] = useState(new Animated.Value(0));

  console.log('progress: ', progressCount);

  const progressAnimated = progress.interpolate({
		inputRange: [0, totalActivities],
		outputRange: [0, 342]
	});

  Animated.timing(progress, {
    toValue: progressCount,
    duration: 500,
    easing: EasingNode.linear
  }).start();

  function handleStatusBar() {
		return (
			<ProgressMenuBar
				style={{ borderRadius: 32 }}
			>
				<Animated.View style={[
					{
						height: 20,
						borderRadius: 32,
						backgroundColor: theme.colors.primary
					},
					{
						width: progressAnimated,
					}
				]}>

				</Animated.View>
			</ProgressMenuBar>
		);
	}

  return (
    <MenuBar>
      <TouchableOpacity>
        <MaterialIcons name="close" size={50} color="#37464F" />
      </TouchableOpacity>

      { handleStatusBar() }
    </MenuBar>
  );
}
