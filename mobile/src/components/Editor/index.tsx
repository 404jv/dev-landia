import React from 'react';
import { Text } from 'react-native';

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
}

export function Editor({ codeEditor, setCodeEditor }: IEditorProps) {
  
  function handleDeleteCodeFromEditor(index: number) {
		setCodeEditor(codeEditor.filter((code, i) => i !== index));
	}  

  return (
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
  );
}
