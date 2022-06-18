import React, { useRef, useEffect } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import theme from "../../Global/styles/theme";

import { ModalButton, ModalTextButton, Title } from "./styles";

type Props = {
  isModalVisible: boolean;
  handleNextActivity: (isUserAnswer: boolean) => void;
  isUserAnswer: boolean;
};

export function ActivityStatusModal({
  isModalVisible,
  handleNextActivity,
  isUserAnswer,
}: Props): JSX.Element {
  const bottomSheetRef = useRef<BottomSheet>(null);

  function onOpen(): void {
    bottomSheetRef.current?.expand();
  }

  function onClose(): void {
    bottomSheetRef.current?.close();
  }

  useEffect(() => {
    if (isModalVisible) {
      onOpen();
      return;
    }
    onClose();
  }, [isModalVisible]);

  return (
    <BottomSheet
      snapPoints={[0.1, 150]}
      ref={bottomSheetRef}
      style={{
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
      backgroundStyle={{
        backgroundColor: theme.colors.secondary,
      }}
      enableHandlePanningGesture={false}
      enablePanDownToClose={false}
    >
      <Title>Ótimo código!</Title>

      <ModalButton onPress={() => handleNextActivity(isUserAnswer)}>
        <ModalTextButton>Continuar</ModalTextButton>
      </ModalButton>
    </BottomSheet>
  );
}
