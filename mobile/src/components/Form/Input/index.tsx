import React, { forwardRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { TextInput, TextInputProps } from "react-native";

import { Container, InputText, IconContainer } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ value, iconName, ...rest }, ref) => {
    const theme = useTheme();

    const [isFocused, setIsfocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus(): void {
      setIsfocused(true);
    }

    function handleInputBlur(): void {
      setIsfocused(false);
      setIsFilled(!!value);
    }

    return (
      <Container>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={iconName}
            size={26}
            color={
              isFocused || isFilled
                ? theme.colors.blue
                : theme.colors.text_detail
            }
          />
        </IconContainer>

        <InputText
          isFocused={isFocused}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
          ref={ref}
        />
      </Container>
    );
  }
);
