import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { colors } from '../../src/theme/colors';
import { GlassButton } from '../../src/components/GlassButton';
import { useAuth } from '../../src/contexts/AuthContext';

export default function Login() {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
    } catch (e: any) {
      Alert.alert('Sign in failed', e?.message ?? 'Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {/* Swap this for the real Chronos mascot illustration */}
        <View style={styles.mascotPlaceholder} />
        <Text style={styles.heading}>Hey, I'm Chronos.</Text>
        <Text style={styles.body}>
          I'm here to help you turn your goals into a plan — and your plan into progress.
        </Text>
      </View>

      <View style={styles.bottom}>
        <GlassButton
          label="Continue with Google"
          onPress={handleGoogleSignIn}
          loading={loading}
          variant="primary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.latte,
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingTop: 110,
    paddingBottom: 60,
  },
  top: { alignItems: 'center' },
  mascotPlaceholder: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.taupe,
    marginBottom: 32,
  },
  heading: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 30,
    color: colors.charcoal,
    textAlign: 'center',
    marginBottom: 12,
  },
  body: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    lineHeight: 22,
    color: colors.mutedBrown,
    textAlign: 'center',
    maxWidth: 300,
  },
  bottom: {},
});
