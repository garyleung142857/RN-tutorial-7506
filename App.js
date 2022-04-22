import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NumberBox from './components/NumberBox'
import SumResult from './components/SumResult';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NumberBox />
      <NumberBox />
      <NumberBox />
      <SumResult result={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
