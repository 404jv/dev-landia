import React from "react";
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
  options?: IOption[];
  text?: string;
}

export function Bash({ options, text }: IBashProps): JSX.Element {
  return (
    <BashContainer>
      <Header>
        <Circle style={{ marginLeft: 16, backgroundColor: "#FF5A54" }} />
        <Circle style={{ backgroundColor: "#E5BF2F" }} />
        <Circle style={{ backgroundColor: "#51C22D" }} />
      </Header>

      <Body>
        <Arrow> $ </Arrow>

        <BashContent>
          {options ? (
            options.map((line, index) => (
              <Command
                key={`${line.id}-${index + 1}`}
                commandName={line.name}
                color={line.hexadecimal_color}
              />
            ))
          ) : (
            <BashText>{text}</BashText>
          )}
        </BashContent>
      </Body>
    </BashContainer>
  );
}
