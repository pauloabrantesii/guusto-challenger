import { CheckboxInput } from '@components/CheckboxInput';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { TodoItemProps } from './types';

export const TodoItem = ({ id, title, completed, onToggle }: TodoItemProps) => {
  console.log('tipo do id', typeof id);
  return (
    <View style={styles.container}>
      <CheckboxInput checked={completed} onToggle={() => onToggle(id)} />
      <Text
        style={[styles.title, completed && styles.titleCompleted]}
        numberOfLines={2}
      >
        {title}
      </Text>
    </View>
  );
};
