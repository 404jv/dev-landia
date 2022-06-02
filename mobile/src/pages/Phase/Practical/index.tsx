import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Portal, Provider } from "react-native-paper";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import { playSound } from "../../../utils/playSound";

import {
  Description,
  Title,
  Section,
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
} from "./styles";

import { Menu } from "../../../components/Menu";
import { Bash } from "../../../components/Bash";
import { Editor } from "../../../components/Editor";
import { ActivityStatusModal } from "../../../components/ActivityStatusModal";

interface IOption {
  id: string;
  name: string;
  type: string;
  hexadecimal_color: string;
}

interface TipsProps {
  id: string;
  name: string;
}

type Activity = {
  id: string;
  title: string;
  description: string;
  type: string;
  default_code: IOption[];
  activity_answer: IOption[];
  is_needed_tests: boolean;
  tips: TipsProps[];
  options: IOption[];
  order: number;
};

interface Props {
  currentActivity: Activity;
  handleNextActivity: (isUserAnswer: boolean) => void;
}

export function Practical({
  currentActivity,
  handleNextActivity,
}: Props): JSX.Element {
  const theme = useTheme();

  const [codeEditor, setCodeEditor] = useState<IOption[]>([]);
  const [compileCode, setCompileCode] = useState<IOption[]>([]);
  const [progressBarCount, setProgressBarCount] = useState(0);
  const [isUserAnswer, setIsUserAnswer] = useState(true);
  const [isConfirmedToShowAnswer, setIsConfirmedToShowAnswer] = useState(false);

  const [isCurrentActivityCorrect, setIsCurrentActivityCorrect] =
    useState(false);

  async function handleCheckAnswer(): Promise<void> {
    const userAnswer = codeEditor;

    setCompileCode(userAnswer);

    if (!isUserAnswer) {
      await playSound("correctSong");
      setIsCurrentActivityCorrect(true);
      return;
    }

    if (userAnswer.length !== currentActivity.activity_answer.length) {
      await playSound("wrongSong");
      return;
    }

    const isActivityCorrect = userAnswer.every((line, index) => {
      if (line.name !== currentActivity.activity_answer[index].name) {
        return false;
      }

      return true;
    });

    if (!isActivityCorrect) {
      await playSound("wrongSong");
      return;
    }

    await playSound("correctSong");
    setProgressBarCount((oldState) => oldState + 1);
    setIsCurrentActivityCorrect(true);
  }

  function handleShowAnswer(): void {
    setCodeEditor(currentActivity.activity_answer);
    setIsUserAnswer(false);
    setIsConfirmedToShowAnswer(false);
  }

  const showWarningToShowAnswerModal = (): void =>
    setIsConfirmedToShowAnswer(true);
  const hideWarningToShowAnswerModal = (): void =>
    setIsConfirmedToShowAnswer(false);

  useEffect(() => {
    setCodeEditor(currentActivity.default_code);
    setCompileCode(currentActivity.default_code);
    setIsCurrentActivityCorrect(false);
    setIsUserAnswer(true);
  }, [currentActivity.default_code]);
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />

      <Menu progressCount={progressBarCount} totalActivities={5} />

      <ScrollView>
        <Section>
          <Title>Bora codar</Title>
          <Text>{currentActivity.description}</Text>
        </Section>

        <Section>
          <Title>Dicas</Title>
          <Description>
            {currentActivity.tips.map((tip) => (
              <Text key={tip.id}>{`▪︎ ${tip.name}`}</Text>
            ))}
          </Description>
        </Section>

        <Section>
          <Title>Objetivo do código</Title>
          <Bash options={currentActivity.activity_answer} />
        </Section>

        <Section>
          <Title>Resultado atual</Title>
          <Bash options={compileCode} />
        </Section>

        <Section>
          <Title>Seu código</Title>

          <Editor
            options={currentActivity.options}
            codeEditor={codeEditor}
            setCodeEditor={setCodeEditor}
          />
        </Section>

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
                Clicando no botão confirmar vai ser mostrado a solução correta.
                A atividade vai para o final da fila então não esqueça de
                memoriza-la
              </ModalContentText>

              <ModalButton onPress={handleShowAnswer}>
                <ModalButtonText>Confirmar</ModalButtonText>
              </ModalButton>
            </ModalContainer>
          </Modal>
        </Portal>
      </Provider>

      <ActivityStatusModal
        isUserAnswer={isUserAnswer}
        isModalVisible={isCurrentActivityCorrect}
        handleNextActivity={handleNextActivity}
      />
    </Container>
  );
}
