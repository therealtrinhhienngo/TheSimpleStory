import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'

const PostFormScreen = () => {
    return (
        <View style={tailwind `items-center p-3`}>
            {/* Assets Input */}
            <TouchableOpacity
                style={tailwind`bg-slate-200 h-70 w-70 items-center justify-center rounded-md`}
            >
                <View style={tailwind `flex-row items-center`}>
                    <Image
                        source={require('../assets/image.png')}
                        style={tailwind`w-10 h-10`}
                    />
                    <Text style={tailwind `ml-3 text-slate-700`}>Thêm ảnh</Text>
                </View>
            </TouchableOpacity>

            {/* Title Input */}
            

            {/* Content Input */}
        </View>
    )
}

export default PostFormScreen