import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'
import CustomTabar from '../component/custom_tabbbar'
import { Routes, TabRoutes } from '../config/routes_config'
import AccountTab from './MainTabbar/account_tab'
import HomeTab from './MainTabbar/home_tab'
import NotificationTab from './MainTabbar/notification_tab'


const HomeScreen = () => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();

  return (
    <View style={tailwind`flex-1`}>
      {/* App bar */}
      <View style={tailwind`bg-slate-200 flex-row items-center p-5`}>
        <Text style={tailwind`text-xl font-bold text-black`}>TheSimpleStory</Text>

        <TouchableOpacity
          style={tailwind`shadow-md bg-white w-10 h-10 items-center justify-center p-5 rounded-full items-center ml-40`}
          onPress={() => { navigation.navigate(Routes.SearchScreen) }}
        >
          <Image
            source={require('../assets/search_icon.png')}
            style={tailwind`w-5 h-5`}
          />
        </TouchableOpacity>
      </View>

      {/* Tabbar  */}
      <Tab.Navigator tabBar={props => <CustomTabar {...props} />}>
        <Tab.Screen name={TabRoutes.homeTab} component={HomeTab} />
        <Tab.Screen name={TabRoutes.notificationTab} component={NotificationTab} />
        <Tab.Screen name={TabRoutes.accountTab} component={AccountTab} />
      </Tab.Navigator>

      {/* Tab Home */}
    </View>
  )
}

export default HomeScreen