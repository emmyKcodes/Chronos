import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../../src/theme/colors';
import { GlassView } from '../../src/components/GlassView';

const GOALS = [
  { title: 'Become a Senior Frontend Developer', progress: 62, milestones: 7 },
  { title: 'Save ₦5,000,000', progress: 34, milestones: 4 },
  { title: 'Read the Bible in 1 Year', progress: 18, milestones: 12 },
];

export default function Goals() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Goals</Text>
      <FlatList
        data={GOALS}
        keyExtractor={(g) => g.title}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <GlassView style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <View style={styles.row}>
              <Text style={styles.percent}>{item.progress}%</Text>
              <Text style={styles.milestones}>{item.milestones} milestones</Text>
            </View>
          </GlassView>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.latte, padding: 24, paddingTop: 70 },
  heading: { fontFamily: 'PlayfairDisplay_600SemiBold', fontSize: 28, color: colors.charcoal, marginBottom: 20 },
  list: { gap: 14, paddingBottom: 140 },
  card: { padding: 20 },
  cardTitle: { fontFamily: 'Inter_600SemiBold', fontSize: 16, color: colors.charcoal, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  percent: { fontFamily: 'Inter_600SemiBold', color: colors.merlot },
  milestones: { fontFamily: 'Inter_400Regular', color: colors.mutedBrown },
});
