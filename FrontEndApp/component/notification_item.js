import React from 'react'
import { Image, Text, View } from 'react-native'
import tailwind from 'twrnc'

const NotificationItem = () => {
  return (
    <View style={tailwind `flex-row items-center p-5 bg-white rounded-md w-95 self-center shadow-md`}>
        {/* Icon */}
        <Image 
            source={require('../assets/notification.png')}
            style={tailwind `w-[28px] h-[32px]`}
        />

        {/* Notification info */}
        <View style={tailwind `ml-3`}>
            <Text style={tailwind `text-[18px] font-bold`}>Notification</Text>
            <Text>Date: 10/10/2024</Text>
        </View>
    </View>
  )
}

export default NotificationItem