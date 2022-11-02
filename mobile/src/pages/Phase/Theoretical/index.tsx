import React from "react";

import { useNavigation } from "@react-navigation/native";

import Markdown, { ASTNode, RenderRules } from "react-native-markdown-display";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Bash } from "../../../components/Bash";
import { Header } from "./Header";

import { api } from "../../../services/api";

import {
  FinishButton,
  TextButton,
  ContainerScrollView,
  Content,
  styles,
} from "./styles";

const rules: RenderRules = {
  fence: (node: ASTNode) => {
    return node.markup !== "~~~" ? (
      <SyntaxHighlighter
        key={node.key}
        language="javascript"
        style={dracula}
        highlighter="prism"
      >
        {node.content}
      </SyntaxHighlighter>
    ) : (
      <Bash key={node.key} options={node.content} />
    );
  },
};

interface TheoreticalActivityProps {
  id: string;
  map_id: string;
  title: string;
  markdown_text: string;
}

export function Theoretical({
  id,
  map_id,
  title,
  markdown_text,
}: TheoreticalActivityProps): JSX.Element {
  const navigation = useNavigation();

  async function handleFinishClass(): Promise<void> {
    await api.put(`/game/correct/${id}`, {
      map_id,
    });
    navigation.navigate("Home");
  }

  return (
    <ContainerScrollView>
      <Header title={title} />
      <Content>
        <Markdown rules={rules} style={styles}>
          {markdown_text}
        </Markdown>

        <FinishButton onPress={handleFinishClass} activeOpacity={0.7}>
          <TextButton>FINALIZAR</TextButton>
        </FinishButton>
      </Content>
    </ContainerScrollView>
  );
}
