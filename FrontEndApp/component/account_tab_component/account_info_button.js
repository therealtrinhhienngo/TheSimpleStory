import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'

const AccountInfoButton = ({ avatar, username, directionIcon }) => {
    return (
        <TouchableOpacity
            style={tailwind`w-90 bg-slate-300 p-4 rounded-md mb-4`}
        >
            <View style={tailwind`flex-row items-center`}>
                {/* User Avatar */}
                <Image
                    source={{ uri: avatar }}
                    style={tailwind`w-10 h-10 rounded-full mr-3`}
                />

                {/* Username */}
                <Text style={tailwind `text-slate-700 font-bold`}>{username}</Text>

                {/* Button Direction Icon */}
                <Image
                    source={directionIcon}
                    style={tailwind`w-10 h-10 ml-48`}
                />
            </View>
        </TouchableOpacity>
    )
}

export default AccountInfoButton