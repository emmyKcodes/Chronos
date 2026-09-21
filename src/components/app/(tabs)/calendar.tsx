import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../src/theme/colors';
import { GlassView } from '../../src/components/GlassView';

export default function Calendar() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>September 2026</Text>
      <GlassView style={styles.card}>
        <Text style={styles.placeholder}>
          Calendar grid goes here — wire it up to the `tasks` table (scheduled_date /
          scheduled_time) in Supabase.
        </Text>
      </GlassView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.latte, padding: 24, paddingTop: 70 },
  heading: { fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: 26, color: colors.charcoal },
  card: { padding: 20, marginTop: 16 },
  placeholder: { fontFamily: 'Inter_400Regular', color: colors.mutedBrown, lineHeight: 20 },
});
