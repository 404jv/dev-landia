import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { EasingNode } from "react-native-reanimated";

import { MenuBar, ProgressMenuBar } from "./styles";

import theme from '../../Global/styles/theme';
import { NavigationProp } from "@react-navigation/native";

interface IMenuProps {
	totalActivities: number;
	progressCount: number;
	onPress: () => any;
}

export function Menu({ totalActivities, progressCount, onPress }: IMenuProps) {
	const [progress, setProgress] = useState(new Animated.Value(0));

	const progressAnimated = progress.interpolate({
		inputRange: [0, totalActivities],
		outputRange: [0, 274]
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
			<TouchableOpacity activeOpacity={0.7} onPress={onPress}>
				<MaterialIcons name="close" size={50} color="#37464F"/>
			</TouchableOpacity>

			{handleStatusBar()}
		</MenuBar>
	);
}
