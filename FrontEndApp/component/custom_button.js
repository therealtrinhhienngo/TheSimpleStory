import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'

const CustomButtom = ({buttonName, buttonFunction, backgroundStyle, textStyle}) => {
  return (
    <View>
        <TouchableOpacity 
            onPress={buttonFunction}
            style={tailwind `${backgroundStyle}`}
        >
            <Text style={tailwind `${textStyle}`}>{buttonName}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButtom