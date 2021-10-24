import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Modal, Portal, Provider } from 'react-native-paper';

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
	const [isCurrentActivityCorrect, setIsCurrentActivityCorrect] = useState(false);

	function handleCheckAnswer() {
		const userAnswer = codeEditor;

		setCompileCode(userAnswer);

		if (userAnswer.length !== currentActivity.answer.length) {
			return;
		}

		const isActivityCorrect = userAnswer.every((line, index) => {
			if (line.name !== currentActivity.answer[index].name) {
				return false;
			}

			return true;
		});

		if (!isActivityCorrect) {
			return;
		}

		if (indexActivity >= (activities.length - 1)) {
			return handleRestart();
		};

		setIsCurrentActivityCorrect(true);
		setIndexActivity(++indexActivity);
		setProgressBarCount(indexActivity);
	}

	function handleNextActivity() {
		setIsCurrentActivityCorrect(false);
		setCurrentActivity(activities[indexActivity]);
	}

	function handleRestart() {
		setIndexActivity(0);
		setProgressBarCount(0);
	}

	function handleShowAnswer() {
		setCodeEditor(currentActivity.answer);
		setVisible(!Visible);
	}

	useEffect(() => {
		setCodeEditor(currentActivity.default_code);
		setCompileCode(currentActivity.default_code);
	}, [currentActivity]);

	const [Visible, setVisible] = useState(false);
	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);

	return (
		<Container>
			<Menu progressCount={progressBarCount} totalActivities={activities.length} />

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
					<SeeAnswerButton onPress={showModal}>
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
					<Modal visible={Visible} onDismiss={hideModal}>

						<ModalContainer>
							<ModalHeader>
								<ModalTitle>Mostrar Solução?</ModalTitle>
								<ModalIcon name="x" onPress={hideModal} />
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
