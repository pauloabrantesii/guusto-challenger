import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { HeaderComponentProps } from './types';

export const HeaderComponent = ({
  title,
  subtitle,
  variant = 'subtitle',
}: HeaderComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {variant === 'badge' ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{subtitle}</Text>
        </View>
      ) : (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
    </View>
  );
};
