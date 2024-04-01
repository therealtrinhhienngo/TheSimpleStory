import React from 'react'
import { Text, View } from 'react-native'
import NotificationItem from '../../component/notification_item'
import tailwind from 'twrnc'

const NotificationTab = () => {
  return (
    <View >
      <View style={tailwind `h-3`}/>
      <NotificationItem />
    </View>
  )
}

export default NotificationTab