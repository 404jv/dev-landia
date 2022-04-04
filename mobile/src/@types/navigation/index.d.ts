interface NextSignUpProps {
  userData: {
    name: string;
    email: string;
    user: string;
  };
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Activity: undefined;
      Achievements: undefined;
      Perfil: undefined;
      SignIn: undefined;
      SignUp: undefined;
      NextSignUp: NextSignUpProps;
      FinishSignUp: undefined;
      Nada: undefined;
    }
  }
}
