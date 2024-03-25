import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import tailwind from 'twrnc'

const AuthButton = ({source, authFunction, backgroundStyle}) => {
    return (
        <TouchableOpacity
            onPress={authFunction}
            style={backgroundStyle}
        >
            <Image
                source={source}
                style={tailwind`h-20 w-20`}
            />
        </TouchableOpacity>
    )
}

export default AuthButton