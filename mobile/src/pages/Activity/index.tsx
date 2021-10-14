import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, View, ScrollView } from 'react-native';

import { Command } from '../../components/Command';

import {
	Description,
	Title,
	SectionStyles,
	Container,
	Text,
	Bash,
	Code,
	OptionCode,
	Options,
	OptionEditorCode,
	SectionButtons,
	CompileButton,
	CompileIconButton,
	SeeAnswerButton,
	SeeAnswerIconButton,
	BashContent
} from './styles';
import { Menu } from '../../components/Menu';

interface IOption {
	name: string;
	type: string;
	hexadecimal_color: string;
	created_at: Date;
}

export function Activity() {
	const [codeEditor, setCodeEditor] = useState<IOption[]>([]);
	const [compileCode, setCompileCode] = useState<IOption[]>([]);
	let [indexActivity, setIndexActivity] = useState(0);
	const [progressBarCount, setProgressBarCount] = useState(0);

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
				name: "drawWhiteBox",
				type: "js_function",
				hexadecimal_color: "#FFFFFF",
				created_at: new Date()
			},
			{
				name: "drawRedBox",
				type: "js_function",
				hexadecimal_color: "#EF4135",
				created_at: new Date()
			}
		],
		answer: [
      {
				name: "drawBlueBox",
				type: "js_function",
				hexadecimal_color: "#0055A4",
				created_at: new Date()
			},
			{
				name: "drawWhiteBox",
				type: "js_function",
				hexadecimal_color: "#FFFFFF",
				created_at: new Date()
			},
			{
				name: "drawRedBox",
				type: "js_function",
				hexadecimal_color: "#EF4135",
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
				name: "drawWhiteBox",
				type: "js_function",
				hexadecimal_color: "#FFFFFF",
				created_at: new Date()
			},
			{
				name: "drawRedBox",
				type: "js_function",
				hexadecimal_color: "#EF4135",
				created_at: new Date()
			}
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
				name: "drawWhiteBox",
				type: "js_function",
				hexadecimal_color: "#FFFFFF",
				created_at: new Date()
			},
			{
				name: "drawRedBox",
				type: "js_function",
				hexadecimal_color: "#EF4135",
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

	const activities = [
		activity,
		activity,
		activity,
		activity,
		activity,
	];

	const [currentActivity, setCurrentActivity] = useState(activities[0]);

  function handleAddCodeToEditor(index: number) {
		const option = currentActivity.options[index];

		setCodeEditor(oldState => [...oldState, option]);
	}

	function handleDeleteCodeFromEditor(index: number) {
		setCodeEditor(codeEditor.filter((code, i) => i !== index));
	}

  function handleCheckAnswer() {
    const userAnswer = codeEditor;

		setCompileCode(userAnswer);

    if (userAnswer.length !== currentActivity.answer.length) {
      console.log('👎 Usuário errou!');

      return;
    }

    userAnswer.forEach((line, index) => {
      if (line.name !== codeEditor[index].name) {
        console.log('👎 Usuário errou!');

        return;
      };
    });

		if (indexActivity >= (activities.length-1)) return handleRestart();

		setIndexActivity(++indexActivity);
		console.log(indexActivity);
		setCurrentActivity(activities[indexActivity]);

		setProgressBarCount(indexActivity);

    console.log('🎉 Usuário acertou!');
  }

	function handleRestart() {
		setIndexActivity(0);
		setProgressBarCount(0);
	}

	function handleShowAnswer() {
		setCodeEditor(currentActivity.answer);
	}

	useEffect(() => {
		setCodeEditor(currentActivity.default_code);
		setCompileCode(currentActivity.default_code);
	}, []);

	return (
		<Container>
			<Menu progressCount={progressBarCount} totalActivities={activities.length} />

			<ScrollView>
				<SectionStyles>
					<Title>Bora Codar!</Title>
					<Description>
						<Text>{currentActivity.description}</Text>
					</Description>
				</SectionStyles>

				<SectionStyles>
					<Title>Dicas</Title>
					<Description>
						{currentActivity.tips.map((tip, index) => (
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

							<BashContent>
								{currentActivity.answer.map((line, index) => (
									<Command key={index} commandName={line.name} />
								))}
							</BashContent>
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

							<BashContent>
								{compileCode.map((line, index) => (
									<Command key={index} commandName={line.name} />
								))}
							</BashContent>
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
						{currentActivity.options.map((option, index) => (
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
								
				<SectionButtons>
					<SeeAnswerButton onPress={handleShowAnswer}>
						<SeeAnswerIconButton>
							<MaterialIcons name="remove-red-eye" size={32} color="#fff" />
						</SeeAnswerIconButton>

						<Text>Solução</Text>
					</SeeAnswerButton>

					<CompileButton onPress={handleCheckAnswer}>
						<CompileIconButton>
							<MaterialIcons name="play-arrow" size={41} color="#fff" />
						</CompileIconButton>

						<Text>Compilar</Text>
					</CompileButton>
				</SectionButtons>

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
