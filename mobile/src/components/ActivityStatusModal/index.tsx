import React, { useRef, useEffect } from 'react';
import { Modalize } from 'react-native-modalize';
import { ModalButton, ModalButtonText } from '../../pages/Activity/styles';


type Props = {
  isModalVisible: boolean;
  handleNextActivity: () => void;
}

export function ActivityStatusModal({ isModalVisible, handleNextActivity }: Props) {
  const modalizeRef = useRef<Modalize>(null);

  function onOpen() {
    modalizeRef.current?.open();
  }

  function onClose() {
    modalizeRef.current?.close();
  }

  useEffect(() => {
    if (isModalVisible) {
      return onOpen();
    }

    onClose();
  }, [isModalVisible]);

  return (
    <Modalize
      alwaysOpen={180}
      ref={modalizeRef}
      snapPoint={180}
    >
      <ModalButton>
        <ModalButtonText onPress={handleNextActivity}>
          Next Activity
        </ModalButtonText>
      </ModalButton>
    </Modalize>
  );
}
