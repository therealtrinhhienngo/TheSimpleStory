import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import tailwind from 'twrnc'

const PostInputComponent = ({ inputStyle, placeholder, textController, multilineStatus }) => {
    const [text, setText] = useState('');

    const handleTextChange = newText => {
        setText(newText);
        // Pass the new text to the parent component if onChangeText prop is provided
        if (textController) {
            textController(newText);
        }
    };

    return (
        <View>
            <TextInput
                style={tailwind`${inputStyle}`}
                placeholder={placeholder}
                multiline={multilineStatus}
            />
        </View>
    )
}

export default PostInputComponent