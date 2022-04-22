import React from 'react'
import { Text } from 'react-native'

export default NumberBox = ({result}) => {
  return (
    <Text
      style={{backgroundColor: 'lightblue', margin: 2}}
    > {result} </Text>
  )
}
