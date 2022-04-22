import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default NumberBox = ({textStyle}) => {
  return (
    <TextInput
      style={[styles.inputText, textStyle]}
      keyboardType="numeric"
    />
  )
}

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: 'lightgrey',
    minWidth: 150
  }
})
