import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Header } from '../../components/Header';
import theme from '../../Global/styles/theme';
import { class1 } from './class1';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ContainerScrollView, Content } from './styles';

export function ClassArticle() {
  return (
    <ContainerScrollView>
      <Header title="Função em C" />
      <Content>
        <Markdown
          rules={{
            fence: (node) => {
              return (
                <SyntaxHighlighter
                  key={node.key}
                  language="javascript"
                  style={dracula}
                  highlighter={"prism"}
                >{node.content}</SyntaxHighlighter>
              );
            }
          }}
          style={styles}
        >{class1}</Markdown>
      </Content>
    </ContainerScrollView>
  );
}

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
    color: '#FFF',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: theme.fonts.regular,
  }
});
