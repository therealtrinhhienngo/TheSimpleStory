import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'twrnc'
import { UserTabRoutes } from '../config/routes_config'
import PostsTab from './UserTabbar/posts_tab'
import MediaTab from './UserTabbar/media_tab'
import CustomTabar from '../component/custom_tabbbar'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const UserScreen = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={tailwind `flex-1`}>
      <View>
        {/* User's assets */}
        <View style={tailwind``}>
          <View style={tailwind`bg-slate-400 h-60`}></View>
          <View style={tailwind`absolute w-full h-60`}>
            <View style={tailwind`bg-slate-300 h-30 w-30 rounded-full mt-45 ml-5`}></View>
          </View>
        </View>

        {/* User's info */}
        <View style={tailwind`mt-20 py-3 px-7`}>
          <Text style={tailwind`text-lg font-bold`}>Username</Text>
          <Text>Likes</Text>
          <Text>Follows</Text>
        </View>
      </View>

      <View style={tailwind `h-5`}/>

      {/* Tabbar */}
      <Tab.Navigator tabBar={props => <CustomTabar {...props} />}>
        <Tab.Screen name={UserTabRoutes.postTab} component={PostsTab} />
        <Tab.Screen name={UserTabRoutes.mediaTab} component={MediaTab} />
      </Tab.Navigator>
    </View>
  )
}

export default UserScreen