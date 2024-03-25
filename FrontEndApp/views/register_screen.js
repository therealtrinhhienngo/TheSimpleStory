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
    <View style={tailwind`items-center justify-center p-3`}>
      <ScrollView>
        <View style={tailwind `flex-1`}>
          {/* Login Banner */}
          <CustomTextBanner text={'Đăng Ký'} />

          {/* Text Input */}
          <UserTextInput placeholder={'Username'} />
          <UserTextInput placeholder={'Password'} />
          <UserTextInput placeholder={'Email'} />
          <UserTextInput placeholder={'Phone Number'} />

          {/* Button */}
          <CustomButtom buttonName={'Register'} buttonFunction={() => { }} />

          {/* Options buttons */}
          <OptionsButton
            loginQuestionText={'Đã có tài khoản?'}
            loginText={'Đăng Nhập'}
            loginFunction={() => {
              navigation.goBack();
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default RegisterScreen