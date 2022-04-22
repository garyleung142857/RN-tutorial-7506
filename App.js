import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import NumberBox from './components/NumberBox'
import SumResult from './components/SumResult'
import SumButton from './components/SumButton'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-end'}}>
        <StatusBar style="auto" />
        <NumberBox textStyle={styles.texts}/>
        <NumberBox textStyle={styles.texts}/>
        <View style={{flexDirection: 'row'}}>
          <SumButton textStyle={styles.texts}/>
          <NumberBox textStyle={styles.texts}/>
        </View>
        <SumResult result={0} textStyle={styles.texts}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    fontSize: 36,
    margin: 2,
    height: 50,
    color: 'black'
  }
});
