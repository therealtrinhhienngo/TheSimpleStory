import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'twrnc'

const SearchResultScreen = () => {
  return (
    <View style={tailwind `items-center`}>
        <Text style={tailwind `self-center`}>Search Result Screen</Text>
    </View>
  )
}

export default SearchResultScreen