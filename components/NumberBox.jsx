import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default NumberBox = ({value, onChange, textStyle}) => {
  return (
    <TextInput
      style={[styles.inputText, textStyle]}
      keyboardType="numeric"
      onChangeText={onChange}
      value={value}
    />
  )
}

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: 'lightgrey',
    minWidth: 150
  }
})
