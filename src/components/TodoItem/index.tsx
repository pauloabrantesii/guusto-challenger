import { CheckboxInput } from '@components/CheckboxInput';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { TodoItemProps } from './types';

const BG_PENDING = '#FFD5D8';
const BG_COMPLETED = '#D5F0E8';

export const TodoItem = ({ id, title, completed, onToggle }: TodoItemProps) => {
  const backgroundColor = completed ? BG_COMPLETED : BG_PENDING;

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.row}>
        <View style={styles.textBlock}>
          <Text
            style={[styles.title, completed && styles.titleCompleted]}
            numberOfLines={3}
          >
            {title}
          </Text>
          <Text style={[styles.meta, completed && styles.metaCompleted]}>
            2:00h | Exp. 1 days ago
          </Text>
        </View>
        <View style={styles.checkboxWrap}>
          <CheckboxInput checked={completed} onToggle={() => onToggle(id)} />
        </View>
      </View>
    </View>
  );
};
