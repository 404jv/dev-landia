import React from "react";
import { StyleSheet } from "react-native";
import Markdown, { ASTNode } from "react-native-markdown-display";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Header } from "./Header";
import theme from "../../Global/styles/theme";
import { markdownText } from "./class1";

import {
  FinishButton,
  TextButton,
  ContainerScrollView,
  Content,
} from "./styles";
import { Bash } from "../../components/Bash";

const rules = {
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
      <Bash key={node.key} text={node.content} />
    );
  },
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 32,
    fontFamily: theme.fonts.bold,
  },
  heading2: {
    fontSize: 24,
    lineHeight: 40,
    fontFamily: theme.fonts.bold,
    marginTop: 16,
  },
  heading3: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: theme.fonts.bold,
    marginTop: 16,
  },
  body: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: theme.fonts.regular,
  },
});

export function ClassArticle(): JSX.Element {
  const class1 = {
    map_id: "123456",
    title: "Função em C",
    type: "class",
    max_level: 1,
    markdown_text: markdownText,
  };

  function handleFinishClass(): void {
    console.log("🎉 Aula Finalizada!");
  }

  return (
    <ContainerScrollView>
      <Header title={class1.title} />
      <Content>
        <Markdown rules={rules} style={styles}>
          {class1.markdown_text}
        </Markdown>

        <FinishButton onPress={handleFinishClass} activeOpacity={0.7}>
          <TextButton>FINALIZAR</TextButton>
        </FinishButton>
      </Content>
    </ContainerScrollView>
  );
}
