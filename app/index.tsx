import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../src/theme/colors';

// This screen only flashes briefly while _layout.tsx checks the session
// and redirects to (auth)/login or (tabs).
export default function Index() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.merlot} size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.latte,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
