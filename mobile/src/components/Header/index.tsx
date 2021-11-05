import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { Title, MenuBar } from './styles';

type Props = {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <MenuBar>
      <TouchableOpacity>
        <MaterialIcons name="arrow-back" size={32} color="#37464F" />
      </TouchableOpacity>

      <Title>{title}</Title>
    </MenuBar>
  );
}
