import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../src/theme/colors';
import { GlassView } from '../../src/components/GlassView';

const SUGGESTIONS = [
  'How should I approach this goal?',
  'What should I focus on this week?',
  "I'm falling behind. Help me adjust my plan.",
  'Break this milestone into smaller tasks.',
];

export default function Chronos() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ask Chronos</Text>
      <View style={styles.list}>
        {SUGGESTIONS.map((s) => (
          <GlassView key={s} style={styles.card}>
            <Text style={styles.suggestion}>{s}</Text>
          </GlassView>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.latte, padding: 24, paddingTop: 70 },
  heading: { fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: 26, color: colors.charcoal },
  list: { gap: 12, marginTop: 20 },
  card: { padding: 16 },
  suggestion: { fontFamily: 'Inter_500Medium', color: colors.charcoal },
});
