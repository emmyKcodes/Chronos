import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../src/theme/colors';
import { GlassView } from '../../src/components/GlassView';

const TODAY_TASKS = [
  { time: '9:00 AM', title: 'React Architecture', duration: '60 min' },
  { time: '2:00 PM', title: 'Build project feature', duration: '90 min' },
  { time: '7:30 PM', title: 'Read System Design', duration: '30 min' },
];

export default function Home() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>Good evening</Text>

      <GlassView style={styles.focusCard}>
        <Text style={styles.focusLabel}>Your focus</Text>
        <Text style={styles.focusTitle}>Become a Senior Frontend Developer</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: '62%' }]} />
        </View>
        <Text style={styles.progressLabel}>62% complete</Text>
      </GlassView>

      <Text style={styles.sectionLabel}>TODAY</Text>

      {TODAY_TASKS.map((task) => (
        <GlassView key={task.title} style={styles.taskCard}>
          <View style={styles.taskRow}>
            <View style={styles.checkCircle} />
            <View style={{ flex: 1 }}>
              <Text style={styles.taskTime}>{task.time}</Text>
              <Text style={styles.taskTitle}>{task.title}</Text>
            </View>
            <Text style={styles.taskDuration}>{task.duration}</Text>
          </View>
        </GlassView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.latte },
  content: { padding: 24, paddingTop: 70, paddingBottom: 140, gap: 16 },
  greeting: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 28,
    color: colors.charcoal,
    marginBottom: 8,
  },
  focusCard: { padding: 24 },
  focusLabel: { fontFamily: 'Inter_500Medium', fontSize: 13, color: colors.mutedBrown, marginBottom: 6 },
  focusTitle: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 20,
    color: colors.charcoal,
    marginBottom: 16,
  },
  progressTrack: { height: 4, backgroundColor: colors.taupe, borderRadius: 2, overflow: 'hidden' },
  progressFill: { height: 4, backgroundColor: colors.merlot },
  progressLabel: { fontFamily: 'Inter_500Medium', fontSize: 13, color: colors.mutedBrown, marginTop: 8 },
  sectionLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
    color: colors.mutedBrown,
    marginTop: 8,
  },
  taskCard: { padding: 16 },
  taskRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  checkCircle: { width: 22, height: 22, borderRadius: 11, borderWidth: 1.5, borderColor: colors.merlot },
  taskTime: { fontFamily: 'Inter_500Medium', fontSize: 12, color: colors.mutedBrown },
  taskTitle: { fontFamily: 'Inter_500Medium', fontSize: 15, color: colors.charcoal, marginTop: 2 },
  taskDuration: { fontFamily: 'Inter_400Regular', fontSize: 12, color: colors.mutedBrown },
});
