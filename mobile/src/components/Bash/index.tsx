import React, { useEffect, useState } from "react";
import { Command } from "../Command";

import {
  Arrow,
  BashContainer,
  BashContent,
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
  options?: IOption[] | string;
}

export function Bash({ options }: IBashProps): JSX.Element {
  const [commandsArray, setCommandsArray] = useState<IOption[] | string[]>([]);
  const [isCompilingCode, setIsCompilingCode] = useState(true);

  useEffect(() => {
    if (typeof options === "string") {
      setCommandsArray(options.split(/\s+/));
    } else {
      setCommandsArray(options);
    }

    setIsCompilingCode(false);
  }, [options]);

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
            {commandsArray &&
              commandsArray.map((line, index) => (
                <Command
                  key={`${line.id}-${index + 1}`}
                  commandName={line.name || line}
                  commandAbstractedName={line.abstracted_name || line}
                  color={line.hexadecimal_color}
                />
              ))}
          </BashContent>
        )}
      </Body>
    </BashContainer>
  );
}
