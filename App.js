import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Alert } from 'react-native'
import NumberBox from './components/NumberBox'
import SumResult from './components/SumResult'
import SumButton from './components/SumButton'

export default function App() {
  const [numArr, setNumArr] = React.useState([0, 0, 0])
  const [sum, setSum] = React.useState(null)

  const strToNum = (idx, v) =>{
    let num = Number(v)
    let tempArr = [...numArr]
    tempArr[idx] = num
    setNumArr(tempArr)
    setSum(null)  // reseting the sum when user inputs new numbers
  }

  const onPressBtn = () => {
    const arrSum = numArr[0] + numArr[1] + numArr[2]
    if (isNaN(arrSum)){
      Alert.alert('There is an error in your input.')
    } else {
      setSum(arrSum)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-end'}}>
        <StatusBar style="auto" />
        <NumberBox num={numArr[0]} onChange={v => strToNum(0, v)} textStyle={styles.texts}/>
        <NumberBox num={numArr[1]} onChange={v => strToNum(1, v)} textStyle={styles.texts}/>
        <View style={{flexDirection: 'row'}}>
          <SumButton onPressBtn={onPressBtn} textStyle={styles.texts}/>
          <NumberBox num={numArr[2]} onChange={v => strToNum(2, v)} textStyle={styles.texts}/>
        </View>
        <SumResult result={sum} textStyle={styles.texts}/>
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
