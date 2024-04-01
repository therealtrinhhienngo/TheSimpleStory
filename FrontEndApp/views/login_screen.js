import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import UserTextInput from '../component/user_text_input'
import tailwind from 'twrnc'
import CustomButtom from '../component/custom_button'
import CustomTextBanner from '../component/custom_text_banner'
import OptionsButton from '../component/options_button_component/options_button'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../config/routes_config'
import { loginFunction } from '../modal_service/user_service'

const LoginScreen = () => {
  const navigation = useNavigation();

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  // Handle function
  const handleUsername = value => {
    setInputUsername(value);
  }

  const handlePassword = value => {
    setInputPassword(value);
  }

  return (
    <View style={tailwind `items-center justify-center p-2`}>
      <ScrollView>
        <View style={tailwind `flex-1`}>
          {/* Login Banner */}
          <CustomTextBanner text={'Đăng Nhập'} />

          {/* Text Input */}
          <UserTextInput placeholder={'Username'} textController={handleUsername}/>
          <UserTextInput placeholder={'Password'} textController={handlePassword}/>

          {/* Button */}
          <CustomButtom 
            buttonName={'Login'} 
            buttonFunction={() => loginFunction(navigation, inputUsername, inputPassword)} 
            backgroundStyle={'bg-slate-700 px-5 py-3 shadow-md rounded-md mt-3'}
            textStyle={'text-white font-bold self-center'}
          />

          {/* Options buttons */}
          <OptionsButton
            loginQuestionText={'Chưa có tài khoản?'}
            loginText={'Đăng Ký'}
            loginFunction={() => {
              navigation.navigate(Routes.RegisterScreen);
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default LoginScreen