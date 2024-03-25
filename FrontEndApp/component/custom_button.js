import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'

const CustomButtom = ({buttonName, buttonFunction}) => {
  return (
    <View>
        <TouchableOpacity 
            onPress={buttonFunction}
            style={tailwind `bg-slate-700 px-5 py-3 shadow-md rounded-md mt-3`}
        >
            <Text style={tailwind `text-white font-bold self-center`}>{buttonName}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButtom