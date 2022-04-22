import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default SumButton = ({onPressBtn}) => {
  return (
    <TouchableOpacity
      style={{backgroundColor: 'coral'}}
      onPress={onPressBtn}
    >
      <Text> + </Text>
    </TouchableOpacity>
  )
}
