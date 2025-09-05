import { StyleSheet, SafeAreaView } from 'react-native';

type Props = { children: React.ReactNode }

export function Container({ children }: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
