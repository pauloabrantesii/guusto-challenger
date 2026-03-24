import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CheckboxInputProps } from './types';

export const CheckboxInput = ({
  checked,
  onToggle,
  disabled = false,
}: CheckboxInputProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, checked ? styles.checked : styles.unchecked]}
      onPress={onToggle}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {checked && <Text style={styles.checkmark}>✓</Text>}
    </TouchableOpacity>
  );
};
