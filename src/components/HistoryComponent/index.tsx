import { TodoItem } from '@components/TodoItem';
import { HeaderComponent } from '@components/HeaderComponent';
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
      <HeaderComponent
        title="Histórico"
        subtitle={`${completed.length} concluída(s)`}
        variant="badge"
      />
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
