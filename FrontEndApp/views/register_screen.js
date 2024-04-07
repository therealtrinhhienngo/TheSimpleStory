import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import tailwind from 'twrnc'
import CustomButtom from '../component/custom_button'
import CustomTextBanner from '../component/custom_text_banner'
import OptionsButton from '../component/options_button_component/options_button'
import UserTextInput from '../component/user_text_input'
import { registerFunction } from '../modal_service/user_service'

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhoneNumber, setInputPhoneNumber] = useState(0);

  // Handle function
  const handleUsername = value => {
    setInputUsername(value);
  }

  const handlePassword = value => {
    setInputPassword(value);
  }

  const handleConfirmPassword = value => {
    setInputConfirmPassword(value);
  }

  const handleEmail = value => {
    setInputEmail(value);
  }

  const handlePhoneNumber = value => {
    setInputPhoneNumber(value);
  }

  return (
    <View style={tailwind`items-center p-3`}>
      <View style={tailwind``}>
        {/* Login Banner */}
        <CustomTextBanner text={'Đăng Ký'} />

        {/* Text Input */}
        <UserTextInput placeholder={'Username'} textController={handleUsername} />
        <UserTextInput placeholder={'Password'} textController={handlePassword} />
        <UserTextInput placeholder={'Confirm Password'} textController={handleConfirmPassword} />
        <UserTextInput placeholder={'Email'} textController={handleEmail} />
        <UserTextInput placeholder={'Phone Number'} textController={handlePhoneNumber} keyboardType={'phone-pad'} />

        {/* Button */}
        <CustomButtom
          buttonName={'Register'}
          buttonFunction={() => {
            console.log("Click");
            if (inputUsername != '' || inputPassword != '' || inputConfirmPassword != '' || inputEmail != '' || inputPhoneNumber != '') {
              if (inputConfirmPassword == inputPassword) {
                registerFunction(navigation, inputUsername, inputPassword, inputEmail, inputPhoneNumber);
              }
              else {
                console.log('Wrong Confirm Password');
              }
            }
            else {
              console.log('Empty Data')
            }
          }}
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