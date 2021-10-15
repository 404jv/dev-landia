import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Command } from '../Command';

import { BashContainer, BashContent } from './styles';

interface IOption {
  name: string,
  type: string,
  hexadecimal_color: string,
  created_at: Date
}

interface IBashProps {
  options: IOption[]
}

export function Bash({ options }: IBashProps) {

  return (
    <BashContainer>
      <View style={styles.Top}>
        <View style={styles.red} />
        <View style={styles.yellow} />
        <View style={styles.green} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.arrow}> {'>'} </Text>

        <BashContent>
          {options.map((line, index) => (
            <Command key={index} commandName={line.name} />
          ))}
        </BashContent>
      </View>
    </BashContainer>
  )
}

const styles = StyleSheet.create({
	Top: {
		flexDirection: 'row',
		height: 20,
		backgroundColor: '#1C2124',
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	red: {
		marginLeft: 16,
		marginTop: 3,
		width: 14,
		height: 14,
		borderRadius: 50,
		backgroundColor: '#FF5A54',
	},
	yellow: {
		marginLeft: 4,
		marginTop: 3,
		width: 14,
		height: 14,
		borderRadius: 50,
		backgroundColor: '#E5BF2F',
	},
	green: {
		marginLeft: 4,
		marginTop: 3,
		width: 14,
		height: 14,
		borderRadius: 50,
		backgroundColor: '#51C22D',
	},
	bottom: {
		minHeight: 120,
		backgroundColor: '#000000',
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	},
	arrow: {
		marginTop: 8,
		marginLeft: 4,
		color: '#008000',
		fontSize: 24,
	}
});
