import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Modal, Portal, Provider } from 'react-native-paper';
import { playSound } from '../../utils/playSound';

import { ScrollView } from 'react-native';

import {
	Description,
	Title,
	SectionStyles,
	Container,
	Text,
	SectionButtons,
	CompileButton,
	CompileIconButton,
	SeeAnswerButton,
	SeeAnswerIconButton,
	ModalContainer,
	ModalHeader,
	ModalIcon,
	ModalTitle,
	ModalContentText,
	ModalButton,
	ModalButtonText,
} from './styles';

import { Menu } from '../../components/Menu';
import { Section } from '../../components/Section';
import { Bash } from '../../components/Bash';
import { Editor } from '../../components/Editor';
import { ActivityStatusModal } from '../../components/ActivityStatusModal';

interface IOption {
	name: string;
	type: string;
	hexadecimal_color: string;
	created_at: Date;
}

type Activity = {
	id: string;
	title: string;
	description: string;
	type: string;
	default_code: IOption[];
	answer: IOption[];
	is_needed_tests: boolean;
	created_at: Date;
	tips: string[];
	options: IOption[];
}

export function Activity() {
	const [codeEditor, setCodeEditor] = useState<IOption[]>([]);
	const [compileCode, setCompileCode] = useState<IOption[]>([]);
	const [progressBarCount, setProgressBarCount] = useState(0);
	const [isUserAnswer, setIsUserAnswer] = useState(true);

	const activity: Activity = {
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

	const activity2: Activity = {
		id: String(new Date().getTime()),
		title: 'atividade',
		description: 'Nesse desafio você vai desenhar a bandeira da França com alguns comandos. #2',
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

	const activity3: Activity = {
		id: String(new Date().getTime()),
		title: 'atividade',
		description: 'Nesse desafio você vai desenhar a bandeira da França com alguns comandos. #3',
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


	const [activities, setActivities] = useState<Activity[]>([
		activity,
		activity2,
		activity3,
		activity,
		activity,
	]);

	const [currentActivity, setCurrentActivity] = useState(activities[0]);
	const [isCurrentActivityCorrect, setIsCurrentActivityCorrect] = useState(false);

	async function handleCheckAnswer() {
		const userAnswer = codeEditor;

		setCompileCode(userAnswer);

		if (!isUserAnswer) {
			await playSound('correctSong');
			setIsCurrentActivityCorrect(true);
			return;
		}

		if (userAnswer.length !== currentActivity.answer.length) {
			await playSound('wrongSong');
			return;
		}

		const isActivityCorrect = userAnswer.every((line, index) => {
			if (line.name !== currentActivity.answer[index].name) {
				return false;
			}

			return true;
		});

		if (!isActivityCorrect) {
			await playSound('wrongSong');
			return;
		}

		await playSound('correctSong');
		setProgressBarCount(oldState => oldState + 1);
		setIsCurrentActivityCorrect(true);
	}

	async function handleNextActivity() {
		if (activities.length === 0) {
			return;
		}

		if (isUserAnswer) {
			setActivities(activities.filter((activity, i) => i !== 0));
		} else {
			const wrongActivity = activities.shift();
			activities.push(wrongActivity);
		}

		setCurrentActivity(activities[0]);
		setIsCurrentActivityCorrect(false);
		setIsUserAnswer(true);
		setCodeEditor(currentActivity.default_code);
		setCompileCode(currentActivity.default_code);
	}

	function handleShowAnswer() {
		setCodeEditor(currentActivity.answer);
		setIsUserAnswer(false);
		setIsConfirmedToShowAnswer(false);
	}

	const [isConfirmedToShowAnswer, setIsConfirmedToShowAnswer] = useState(false);
	const showWarningToShowAnswerModal = () => setIsConfirmedToShowAnswer(true);
	const hideWarningToShowAnswerModal = () => setIsConfirmedToShowAnswer(false);

	useEffect(() => {
		setCodeEditor(currentActivity.default_code);
		setCompileCode(currentActivity.default_code);
	}, []);

	return (
		<Container>
			<Menu progressCount={progressBarCount} totalActivities={5} />

			<ScrollView>
				<Section title="Bora Codar!">
					<Text>{currentActivity.description}</Text>
				</Section>

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
					<Bash options={currentActivity.answer} />
				</SectionStyles>

				<SectionStyles>
					<Title>Resultado atual</Title>
					<Bash options={compileCode} />
				</SectionStyles>

				<SectionStyles>
					<Title>Seu código</Title>

					<Editor
						options={currentActivity.options}
						codeEditor={codeEditor}
						setCodeEditor={setCodeEditor}
					/>
				</SectionStyles>

				<SectionButtons>
					<SeeAnswerButton onPress={showWarningToShowAnswerModal}>
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

			<Provider>
				<Portal>
					<Modal
						visible={isConfirmedToShowAnswer}
						onDismiss={hideWarningToShowAnswerModal}
					>
						<ModalContainer>
							<ModalHeader>
								<ModalTitle>Mostrar Solução?</ModalTitle>
								<ModalIcon name="x" onPress={hideWarningToShowAnswerModal} />
							</ModalHeader>

							<ModalContentText>
								Clicando no botão confimar vai ser mostrado a solução correta.
								A atividade vai para o final da fila então não esqueça de memoriza-la
							</ModalContentText>

							<ModalButton onPress={handleShowAnswer}>
								<ModalButtonText>Confirmar</ModalButtonText>
							</ModalButton>
						</ModalContainer>

					</Modal>
				</Portal>
			</Provider>

			<ActivityStatusModal
				isModalVisible={isCurrentActivityCorrect}
				handleNextActivity={handleNextActivity}
			/>
		</Container>
	)
}
