interface NextSignUpProps {
  userData: {
    name: string;
    email: string;
    user: string;
  };
}

type Phase = {
  created_at: string;
  id: string;
  map_id: string;
  description: string;
  markdown_text?: string | null;
  max_level?: number | null;
  order: number;
  title: string;
  type: string;
  current_level: number;
};

interface PhaseProps {
  phase: Phase;
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
      Phase: PhaseProps;
    }
  }
}
