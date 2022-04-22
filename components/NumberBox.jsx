import React from 'react'
import { TextInput } from 'react-native'

export default NumberBox = ({}) => {
  return (
    <TextInput
      style={{backgroundColor: 'lightgrey', margin: 2}}
      keyboardType="numeric"
    />
  )
}
