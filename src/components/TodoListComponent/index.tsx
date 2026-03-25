import { TodoItem } from '@components/TodoItem';
import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { TodoListComponentProps } from './types';

export const TodoListComponent = ({
  todos,
  isLoading,
  isError,
  onToggle,
  onLoadMore,
}: TodoListComponentProps) => {
  if (isLoading && todos.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6C63FF" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Erro ao carregar as tarefas. Verifique sua conexão.
        </Text>
      </View>
    );
  }

  const pending = todos.filter(t => !t.completed).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Tarefas</Text>
        <Text style={styles.subtitle}>{pending} pendente(s)</Text>
      </View>
      <FlatList
        data={todos}
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
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.4}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma tarefa encontrada.</Text>
        }
        ListFooterComponent={
          isLoading ? (
            <View style={styles.footerLoader}>
              <ActivityIndicator size="small" color="#6C63FF" />
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
};
