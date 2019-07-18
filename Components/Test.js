import React from 'react'
import {StyleSheet,View, TextInput, Button } from 'react-native'

class Test extends React.Component {
  render() {
    return (
      <View {{>
        <View style={{ height: 335, backgroundColor: 'red' }}></View>
        <View style={{ height: 335, backgroundColor: 'green' }}></View>
      </View>
    )
  }
}

export default Test