import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, View, ScrollView } from 'react-native';


import {
	Description,
	Title,
	SectionStyles,
	Container,
	ProgressBar,
	Text,
	Bash,
	Code,
	OptionCode,
	Options,
	OptionEditorCode
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IOption {
	name: string;
	type: string;
	hexadecimal_color: string;
	created_at: Date;
}

export function Activity() {
	const [codeEditor, setCodeEditor] = useState<IOption[]>([]);

	const activity = {
		id: String(new Date().getTime()),
		title: 'atividade',
		description: 'Nesse desafio você vai desenhar a bandeira da França com alguns comandos.',
		type: 'block',
		default_code: [
			{
				name: "drawBlueBox",
				type: "js_function",
				hexadecimal_color: "#0055A4",
				created_at: new Date()
			},
			{
				name: "drawRedBox",
				type: "js_function",
				hexadecimal_color: "#EF4135",
				created_at: new Date()
			},
			{
				name: "drawWhiteBox",
				type: "js_function",
				hexadecimal_color: "#FFFFFF",
				created_at: new Date()
			},
			{
				name: "newLine",
				type: "js_function",
				hexadecimal_color: "#169E96",
				created_at: new Date()
			},
		],
		answer: [
      {
				name: "drawBlueBox",
				type: "js_function",
				hexadecimal_color: "#0055A4",
				created_at: new Date()
			},
			{
				name: "drawRedBox",
				type: "js_function",
				hexadecimal_color: "#EF4135",
				created_at: new Date()
			},
			{
				name: "drawWhiteBox",
				type: "js_function",
				hexadecimal_color: "#FFFFFF",
				created_at: new Date()
			},
			{
				name: "newLine",
				type: "js_function",
				hexadecimal_color: "#169E96",
				created_at: new Date()
			},
      {
				name: "drawBlueBox",
				type: "js_function",
				hexadecimal_color: "#0055A4",
				created_at: new Date()
			},
			{
				name: "drawRedBox",
				type: "js_function",
				hexadecimal_color: "#EF4135",
				created_at: new Date()
			},
			{
				name: "drawWhiteBox",
				type: "js_function",
				hexadecimal_color: "#FFFFFF",
				created_at: new Date()
			},
			{
				name: "newLine",
				type: "js_function",
				hexadecimal_color: "#169E96",
				created_at: new Date()
			},
      {
				name: "drawBlueBox",
				type: "js_function",
				hexadecimal_color: "#0055A4",
				created_at: new Date()
			},
			{
				name: "drawRedBox",
				type: "js_function",
				hexadecimal_color: "#EF4135",
				created_at: new Date()
			},
			{
				name: "drawWhiteBox",
				type: "js_function",
				hexadecimal_color: "#FFFFFF",
				created_at: new Date()
			},
			{
				name: "newLine",
				type: "js_function",
				hexadecimal_color: "#169E96",
				created_at: new Date()
			},
    ],
		is_needed_tests: false,
		created_at: new Date(),
		tips: [
			"Use o drawBlueBox para desenhar a caixa azul.",
			"Use o drawRedBox para desenhar a caixa vermelha.",
			"Use o drawWhiteBox para desenhar a caixa branca.",
			"Use o newLine para criar uma nova linha",
		],
		options: [
			{
				name: "drawBlueBox",
				type: "js_function",
				hexadecimal_color: "#0055A4",
				created_at: new Date()
			},
			{
				name: "drawRedBox",
				type: "js_function",
				hexadecimal_color: "#EF4135",
				created_at: new Date()
			},
			{
				name: "drawWhiteBox",
				type: "js_function",
				hexadecimal_color: "#FFFFFF",
				created_at: new Date()
			},
			{
				name: "newLine",
				type: "js_function",
				hexadecimal_color: "#169E96",
				created_at: new Date()
			},
		]
	}

  function handleAddCodeToEditor(index: number) {
		const option = activity.options[index];

		setCodeEditor(oldState => [...oldState, option]);
	}

	function handleDeleteCodeFromEditor(index: number) {
		setCodeEditor(codeEditor.filter((code, i) => i !== index));
	}

  function handleCheckAnswer() {
    const userAnswer = codeEditor;

    if (userAnswer.length !== activity.answer.length) {
      console.log('👎 Usuário errou!');

      return;
    }

    userAnswer.forEach((line, index) => {
      if (line.name !== activity.answer[index].name) {
        console.log('👎 Usuário errou!');

        return;
      };
    });

    console.log('🎉 Usuário acertou!');
  }

	useEffect(() => {
		setCodeEditor(activity.default_code);
	}, []);

	return (
		<Container>
			<ScrollView>
				<ProgressBar>
					<MaterialIcons name="close" size={50} color="#2F3437" />
				</ProgressBar>

				<SectionStyles>
					<Title>Bora Codar!</Title>
					<Description>
						<Text>{activity.description}</Text>
					</Description>
				</SectionStyles>

				<SectionStyles>
					<Title>Dicas</Title>
					<Description>
						{activity.tips.map((tip, index) => (
							<Text key={index}>{`▪︎ ${tip}`}</Text>
						))}
					</Description>
				</SectionStyles>

				<SectionStyles>
					<Title>Objetivo do código</Title>
					<Bash>
						<View style={styles.Top}>
							<View style={styles.red} />
							<View style={styles.yellow} />
							<View style={styles.green} />
						</View>
						<View style={styles.bottom}>
							<Text style={styles.arrow}> {'>'} </Text>
						</View>
					</Bash>
				</SectionStyles>

				<SectionStyles>
					<Title>Resultado atual</Title>
					<Bash>
						<View style={styles.Top}>
							<View style={styles.red} />
							<View style={styles.yellow} />
							<View style={styles.green} />
						</View>
						<View style={[styles.bottom]}>
							<Text style={styles.arrow}> {'>'} </Text>
						</View>
					</Bash>
				</SectionStyles>

				<SectionStyles>
					<Title>Seu código</Title>
					<Code>
						{codeEditor.map((code, index) => (
							<OptionEditorCode
								key={index}
								onPress={() => handleDeleteCodeFromEditor(index)}
							>
								<Text 
									style={{ color: code.hexadecimal_color }} 
								>
									{ 
										code.type === 'js_function' 
										? `${code.name}()` 
										: code.name
									}
								</Text>
							</OptionEditorCode>
						))}
					</Code>

					<Options>
						{activity.options.map((option, index) => (
							<OptionCode
								key={index}
								onPress={() => handleAddCodeToEditor(index)}
							>
								<Text
									style={{ color: option.hexadecimal_color }}
								>
									{ 
										option.type === 'js_function' 
										? `${option.name}()` 
										: option.name
									}
								</Text>
							</OptionCode>
						))}
					</Options>
				</SectionStyles>
        
        <TouchableOpacity onPress={handleCheckAnswer}>
          <Text>Compilar</Text>
        </TouchableOpacity>

			</ScrollView>
		</Container>
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
		backgroundColor: '#121212',
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
