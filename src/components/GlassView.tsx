import type { ReactNode } from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors } from '../theme/colors';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  intensity?: number;
};

export function GlassView({ children, style, intensity = 30 }: Props) {
  return (
    <View style={[styles.wrapper, style]}>
      <BlurView intensity={intensity} tint="light" style={StyleSheet.absoluteFill} />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.glassBorder,
    backgroundColor: colors.glassLight,
  },
  content: {
    // GlassView is a plain wrapper — padding/layout for content lives on
    // whatever's passed via `style`, this inner View just needs to fill it.
    width: '100%',
  },
});
