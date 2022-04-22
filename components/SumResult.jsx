import React from 'react'
import { Text , StyleSheet } from 'react-native'

export default NumberBox = ({result, textStyle}) => {
  return (
    <Text
      style={[styles.resultText, textStyle]}
    > {result} </Text>
  )
}

const styles = StyleSheet.create({
  resultText: {
    backgroundColor: 'lightblue',
    minWidth: 150
  }
})
