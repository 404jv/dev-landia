import React, { useEffect, useState } from "react";
import { Command } from "../Command";

import {
  Arrow,
  BashContainer,
  BashContent,
  BashText,
  Body,
  Circle,
  Header,
} from "./styles";

interface IOption {
  id: string;
  name: string;
  type: string;
  hexadecimal_color: string;
}

interface IBashProps {
  options?: IOption[] | string[];
  text?: string;
}

export function Bash({ options, text }: IBashProps): JSX.Element {
  const [optionsArray, setOptionsArray] = useState<IOption[] | string[]>(
    options
  );
  const [isCompilingCode, setIsCompilingCode] = useState(true);

  useEffect(() => {
    if (text.includes("compile: ")) {
      const [, commandsArray] = text.split("compile: ");

      setOptionsArray(commandsArray.split(" "));
    }
    setIsCompilingCode(false);
  }, []);

  return (
    <BashContainer>
      <Header>
        <Circle style={{ marginLeft: 16, backgroundColor: "#FF5A54" }} />
        <Circle style={{ backgroundColor: "#E5BF2F" }} />
        <Circle style={{ backgroundColor: "#51C22D" }} />
      </Header>

      <Body>
        <Arrow> $ </Arrow>

        {isCompilingCode === false && (
          <BashContent>
            {optionsArray ? (
              optionsArray.map((line, index) => (
                <Command
                  key={`${line.id}-${index + 1}`}
                  commandName={line.name || line}
                  color={line.hexadecimal_color}
                />
              ))
            ) : (
              <BashText>{text}</BashText>
            )}
          </BashContent>
        )}
      </Body>
    </BashContainer>
  );
}
