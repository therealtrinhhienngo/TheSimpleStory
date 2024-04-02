import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import AccountOptionButton from '../../component/account_tab_component/account_option_button'
import tailwind from 'twrnc'
import AccountInfoButton from '../../component/account_tab_component/account_info_button'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../config/routes_config'
import CustomButtom from '../../component/custom_button'

const AccountTab = () => {
  const navigation = useNavigation();

  return (
    <View style={tailwind`items-center p-5`}>
      {/* Account view */}
      <AccountInfoButton
        avatar={'https://i.pinimg.com/474x/e8/52/c2/e852c2a28f7753c7e7ac7b144a6750f0.jpg'}
        username={'Hello'}
        directionIcon={require('../../assets/arrows.png')}
        buttonFunction={() => { navigation.navigate(Routes.UserScreen) }}
      />

      {/* Setting button */}
      <View>
        <AccountOptionButton
          buttonFunction={() => { navigation.navigate(Routes.PostManagementScreen) }}
          icon={require('../../assets/post.png')}
          title={'Quản lý bài đăng'}
        />

        <AccountOptionButton
          buttonFunction={() => { navigation.navigate(Routes.FriendshipScreen) }}
          icon={require('../../assets/friendship.png')}
          title={'Bạn bè'}
        />

        <AccountOptionButton
          buttonFunction={() => { navigation.navigate(Routes.SettingScreen) }}
          icon={require('../../assets/settings.png')}
          title={'Cài đặt'}
        />
      </View>

      {/* Logout buttons */}
      <CustomButtom
        buttonName={'Đăng Xuất'}
        buttonFunction={() => { navigation.navigate(Routes.LoginScreen) }}
        backgroundStyle={'border border-slate-700 w-95 p-5 rounded-md mt-70'}
        textStyle={'self-center text-black'}
      />
    </View>
  )
}

export default AccountTab