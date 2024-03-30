import React from 'react'
import { Text, View } from 'react-native'
import AccountOptionButton from '../../component/account_tab_component/account_option_button'
import tailwind from 'twrnc'
import AccountInfoButton from '../../component/account_tab_component/account_info_button'

const AccountTab = () => {
  return (
    <View style={tailwind `items-center p-5`}>
        {/* Account view */}
        <AccountInfoButton
          avatar={'https://i.pinimg.com/474x/e8/52/c2/e852c2a28f7753c7e7ac7b144a6750f0.jpg'}
          username={'Hello'}
          directionIcon={require('../../assets/arrows.png')}
        />

        {/* Setting button */}
        <View>
          <AccountOptionButton 
            buttonFunction={() => {}}
            icon={require('../../assets/friendship.png')}
            title={'Bạn bè'}
          />

          <AccountOptionButton 
            buttonFunction={() => {}}
            icon={require('../../assets/settings.png')}
            title={'Cài đặt'}
          />
        </View>

        {/* Logout buttons */}
    </View>
  )
}

export default AccountTab