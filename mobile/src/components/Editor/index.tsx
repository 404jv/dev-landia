import React from "react";
import { Text } from "react-native";

import {
  EditorContainer,
  OptionEditorCode,
  OptionCode,
  OptionsContainer,
} from "./styles";

interface IOption {
  id: string;
  name: string;
  type: string;
  hexadecimal_color: string;
}

interface IEditorProps {
  setCodeEditor: React.Dispatch<React.SetStateAction<IOption[]>>;
  codeEditor: IOption[];
  options?: IOption[];
}

export function Editor({
  codeEditor,
  setCodeEditor,
  options,
}: IEditorProps): JSX.Element {
  function handleDeleteCodeFromEditor(index: number): void {
    setCodeEditor(codeEditor.filter((code, i) => i !== index));
  }

  function handleAddCodeToEditor(index: number): void {
    const option = options[index];

    setCodeEditor((oldState) => [...oldState, option]);
  }

  return (
    <>
      <EditorContainer>
        {codeEditor.map((code, index) => (
          <OptionEditorCode
            key={`${code.id}-${index + 1}`}
            onPress={() => handleDeleteCodeFromEditor(index)}
          >
            <Text style={{ color: code.hexadecimal_color }}>
              {code.type === "js_function" ? `${code.name}()` : code.name}
            </Text>
          </OptionEditorCode>
        ))}
      </EditorContainer>
      <OptionsContainer>
        {options?.map((option, index) => (
          <OptionCode
            key={`${option.id}-${index + 1}`}
            onPress={() => handleAddCodeToEditor(index)}
          >
            <Text style={{ color: option.hexadecimal_color }}>
              {option.type === "js_function" ? `${option.name}()` : option.name}
            </Text>
          </OptionCode>
        ))}
      </OptionsContainer>
    </>
  );
}
