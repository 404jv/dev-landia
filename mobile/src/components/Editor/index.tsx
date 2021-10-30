import React, { ReactNode, useState } from 'react';
import { Text } from 'react-native';

import {
  EditorContainer,
  OptionEditorCodeOneLine,
  OptionCode,
  OptionsContainer,
  NormalText,
  ValueForVariable,
  Variable,
  Value
} from './styles';

export type IOption = {
  name: string;
  type: string;
  hexadecimal_color: string;
  user_variable_name?: string;
}

interface IEditorProps {
  setCodeEditor: React.Dispatch<React.SetStateAction<IOption[]>>;
  codeEditor: IOption[];
  options?: IOption[];
}

type ICommands = {
  js_function: (option: IOption, id: number) => ReactNode;
  js_variable: (option: IOption, id: number) => ReactNode;
}

export function Editor({ codeEditor, setCodeEditor, options }: IEditorProps) {
  const [isClickingOnVariableName, setIsClickingOnVariableName] = useState(false);
  const [variableName, setVariableName] = useState('');
  const [variableValue, setVariableValue] = useState('');

  function handleDeleteCodeFromEditor(index: number) {
    setCodeEditor(codeEditor.filter((code, i) => i !== index));
  }

  function handleAddCodeToEditor(index: number) {
    const option = options[index];

    setCodeEditor(oldState => [...oldState, option]);
  }

  function handleCreateOption() {

  }

  const command: ICommands = {
    js_function: (option: IOption, id: number) => {
      return (
        <OptionEditorCodeOneLine
          key={id}
          onPress={() => handleDeleteCodeFromEditor(id)}
        >
          <Text
            style={{ color: option.hexadecimal_color }}
          >
            {`${option.name}()`}
          </Text>
        </OptionEditorCodeOneLine>
      );
    },
    js_variable: (option: IOption, id: number) => {
      return (
        <OptionEditorCodeOneLine
          key={id}
          onPress={() => handleDeleteCodeFromEditor(id)}
        >
          <NormalText>var </NormalText>

          <Variable
            keyboardAppearance="dark"
            maxLength={8}
            autoCorrect={false}
            keyboardType="visible-password"
            onFocus={() => setIsClickingOnVariableName(true)}
            onEndEditing={() => setIsClickingOnVariableName(false)}
            style={[
              (!variableName || isClickingOnVariableName) && {
                borderBottomWidth: 1,
                borderColor: '#FFFFFF',
                minWidth: 40,
              }
            ]}
            onChangeText={setVariableName}
          >
            {variableName}
          </Variable>

          <NormalText> = </NormalText>

          <NormalText>"</NormalText>
          <Value
            keyboardAppearance="dark"
            maxLength={8}
            autoCorrect={false}
            keyboardType="visible-password"
            onFocus={() => setIsClickingOnVariableName(true)}
            onEndEditing={() => setIsClickingOnVariableName(false)}
            style={[
              (!variableName || isClickingOnVariableName) && {
                borderBottomWidth: 1,
                borderColor: '#FFFFFF',
                minWidth: 40,
              }
            ]}
            onChangeText={setVariableValue}
          >
            {variableValue}
          </Value>
          <NormalText>"</NormalText>
        </OptionEditorCodeOneLine>
      );
    }
  }

  return (
    <>
      <EditorContainer>
        {codeEditor.map((code, index) => (
          command[code.type](code, index)
        ))}
      </EditorContainer>

      <OptionsContainer>
        {options?.map((option, index) => (
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
      </OptionsContainer>
    </>
  );
}
