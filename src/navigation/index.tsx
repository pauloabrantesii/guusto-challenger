import { HistoryContainer } from '@containers/HistoryContainer';
import { TodoListContainer } from '@containers/TodoListContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';

export type RootTabParamList = {
  Tarefas: undefined;
  Historico: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#6C63FF',
          tabBarInactiveTintColor: '#A0A0A0',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E8E8E8',
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="Tarefas"
          component={TodoListContainer}
          options={{
            tabBarLabel: 'Tarefas',
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 20, color }}>📋</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Historico"
          component={HistoryContainer}
          options={{
            tabBarLabel: 'concluídas',
            tabBarIcon: ({ color }) => (
              <Text style={{ fontSize: 20, color }}>✅</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
