import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'
import AuthButton from './auth_button'

const OptionsButton = ({loginQuestionText, loginText, loginFunction}) => {
  return (
    <View style={tailwind `mt-10`}>
      {/* Line View */}
      <View style={tailwind`flex-row items-center`}>
        <View style={tailwind`bg-slate-500 h-0.3 w-20`}></View>
        <Text style={tailwind`mx-3 text-slate-500`}>Hoặc đăng nhập bằng</Text>
        <View style={tailwind`bg-slate-500 h-0.3 w-20`}></View>
      </View>

      {/* Google & Facebook login options */}
      <View style={tailwind `flex-row self-center items-center mt-10`}>
        <AuthButton
          source={require('../../assets/facebook.png')}
          authFunction={() => { }}
          backgroundStyle={tailwind `p-3 bg-blue-600 rounded-md`}
        />

        <View style={tailwind `w-10`}/>

        <AuthButton
          source={require('../../assets/google.png')}
          authFunction={() => { }}
          backgroundStyle={tailwind `p-3 bg-white rounded-md`}
        />
      </View>

      {/* Login or Register */}
      <View style={tailwind `flex-row self-center mt-30`}>
        <Text>{loginQuestionText}</Text>
        
        <TouchableOpacity
          onPress={loginFunction}
        >
          <Text style={tailwind `text-blue-500 ml-1`}>{loginText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OptionsButton