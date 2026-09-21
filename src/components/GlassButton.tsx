import { Pressable, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors } from '../theme/colors';

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  variant?: 'primary' | 'glass';
};

export function GlassButton({ label, onPress, loading, variant = 'primary' }: Props) {
  if (variant === 'primary') {
    return (
      <Pressable
        onPress={onPress}
        disabled={loading}
        style={({ pressed }) => [styles.primary, pressed && styles.pressed]}
      >
        {loading ? (
          <ActivityIndicator color={colors.latte} />
        ) : (
          <Text style={styles.primaryText}>{label}</Text>
        )}
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={({ pressed }) => [styles.glassWrap, pressed && styles.pressed]}
    >
      <BlurView intensity={35} tint="light" style={StyleSheet.absoluteFill} />
      {loading ? (
        <ActivityIndicator color={colors.merlot} />
      ) : (
        <Text style={styles.glassText}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.85 },
  primary: {
    backgroundColor: colors.merlot,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    color: colors.latte,
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  },
  glassWrap: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.glassBorder,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glassText: {
    color: colors.merlot,
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
  },
});
