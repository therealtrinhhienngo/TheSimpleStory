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
                style={tailwind `h-10 w-10`}
            />
        </TouchableOpacity>
    )
}

export default AuthButton