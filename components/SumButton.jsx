import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default SumButton = ({onPressBtn, textStyle}) => {
  return (
    <TouchableOpacity
      style={styles.sumBtn}
      onPress={onPressBtn}
    >
      <Text style={[textStyle, styles.plusSign]}> + </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  sumBtn: {
    backgroundColor: 'coral',
    width: 50,
    height: 50,
    margin: 2
  },
  plusSign: {
    color: 'oldlace',
    height: 'auto'
  }
})
