import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'

const AccountOptionButton = ({icon, title, buttonFunction}) => {
  return (
    <TouchableOpacity
        style={tailwind `border-b border-slate-500 p-3 w-95 rounded-md mb-5`}
        onPress={buttonFunction}
    >
        <View style={tailwind `flex-row items-center`}>
            {/* Icon */}
            <Image 
                source={icon}
                style={tailwind `w-8 h-8 mr-3`}
            />

            {/* Title */}
            <Text style={tailwind `text-slate-800`}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default AccountOptionButton