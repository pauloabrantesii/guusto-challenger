import { TodoItem } from '@components/TodoItem';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { HistoryComponentProps } from './types';

export const HistoryComponent = ({
  todos,
  onToggle,
}: HistoryComponentProps) => {
  const completed = todos.filter(t => t.completed);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Histórico</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{completed.length} concluída(s)</Text>
        </View>
      </View>
      <FlatList
        data={completed}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            title={item.title}
            completed={item.completed}
            onToggle={onToggle}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhuma tarefa concluída ainda.{'\n'}Marque tarefas na aba
              principal!
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};
