import React from 'react'
import {StyleSheet,View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main}}>
        <View style={{ flex:1, backgroundColor: 'red' }}></View>
        <View style={{ flex:1, backgroundColor: 'green' }}></View>
      </View>
    )
  }
}


const styles = StyleSheet.create{
	main:{
		flex: 1,
		marginTop: 20
	} 
}
export default Search