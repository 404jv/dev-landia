import React from "react";

import googlePng from "../../../assets/google.png";

import { Container, SignInIcon, Title } from "./styles";

interface ButtonProps {
  title: string;
  icon: any;
}

export function SignInButton({ title, icon }: ButtonProps): JSX.Element {
  return (
    <Container activeOpacity={0.7}>
      <SignInIcon source={icon} />
      <Title>{title}</Title>
    </Container>
  );
}
