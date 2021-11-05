import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Header } from '../../components/Header';
import theme from '../../Global/styles/theme';
import { class1 } from './class1';

import { ContainerScrollView, Content, Title } from './styles';

export function ClassArticle() {
  return (
    <ContainerScrollView>
      <Header title="Função em C" />
      <Content>
        <Markdown style={styles}>{class1}</Markdown>
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
  },
  fence: {
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.border,
    color: '#45A7AD',
    fontFamily: 'monospace',
    marginBottom: 8,
    fontSize: 12,
  }
});
