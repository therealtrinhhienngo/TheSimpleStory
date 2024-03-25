import React from 'react'
import { Text } from 'react-native'
import tailwind from 'twrnc'

const CustomTextBanner = ({text}) => {
  return (
    <Text style={tailwind `text-xl mb-8 text-slate-700 font-bold`}>{text}</Text>
  )
}

export default CustomTextBanner