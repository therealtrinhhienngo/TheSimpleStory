import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'
import { Routes } from '../config/routes_config'

const PostManagementScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={tailwind ``}>
            {/* List Post */}
            <View style={tailwind `h-full`}>

            </View>

            {/* Floating Add Button */}
            <View style={tailwind `absolute self-end mt-[670px]`}>
                <TouchableOpacity
                    style={tailwind`bg-slate-300 p-3 w-14 rounded-full mx-[25px] shadow-md`}
                    onPress={() => {navigation.navigate(Routes.PostFormScreen)}}
                >
                    <Image
                        source={require('../assets/plus.png')}
                        style={tailwind`w-8 h-8 self-center`}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PostManagementScreen