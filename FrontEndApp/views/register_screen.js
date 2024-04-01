import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import CustomTextBanner from '../component/custom_text_banner'
import UserTextInput from '../component/user_text_input'
import CustomButtom from '../component/custom_button'
import tailwind from 'twrnc'
import { Routes } from '../config/routes_config'
import OptionsButton from '../component/options_button_component/options_button'
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tailwind`items-center p-3`}>
      <View style={tailwind ``}>
          {/* Login Banner */}
          <CustomTextBanner text={'Đăng Ký'} />

          {/* Text Input */}
          <UserTextInput placeholder={'Username'} />
          <UserTextInput placeholder={'Password'} />
          <UserTextInput placeholder={'Email'} />
          <UserTextInput placeholder={'Phone Number'} />

          {/* Button */}
          <CustomButtom 
            buttonName={'Register'} 
            buttonFunction={() => { }} 
            backgroundStyle={'bg-slate-700 px-5 py-3 shadow-md rounded-md mt-3'}
            textStyle={'text-white font-bold self-center'}
          />

          {/* Options buttons */}
          <OptionsButton
            loginQuestionText={'Đã có tài khoản?'}
            loginText={'Đăng Nhập'}
            loginFunction={() => {
              navigation.goBack();
            }}
          />
        </View>
    </View>
  )
}

export default RegisterScreen