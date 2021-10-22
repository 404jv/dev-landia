import React from 'react';
import { Text } from 'react-native';
import { OptionCode, OptionsContainer } from '../../pages/Activity/styles';

import { EditorContainer, OptionEditorCode } from './styles';

interface IOption {
  name: string;
  type: string;
  hexadecimal_color: string;
  created_at: Date;
}

interface IEditorProps {
  setCodeEditor: React.Dispatch<React.SetStateAction<IOption[]>>;
  codeEditor: IOption[];
  options?: IOption[];
}

export function Editor({ codeEditor, setCodeEditor, options }: IEditorProps) {

  function handleDeleteCodeFromEditor(index: number) {
    setCodeEditor(codeEditor.filter((code, i) => i !== index));
  }

  function handleAddCodeToEditor(index: number) {
    const option = options[index];

    setCodeEditor(oldState => [...oldState, option]);
  }

  return (
    <>
      <EditorContainer>
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
