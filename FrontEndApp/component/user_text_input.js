import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import tailwind from 'twrnc'

const UserTextInput = ({placeholder, textController}) => {
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
            placeholder={placeholder}
            style={tailwind `border border-slate-500 rounded-md p-3 mb-5 bg-white`}
            onChangeText={handleTextChange}
        />
    </View>
  )
}

export default UserTextInput