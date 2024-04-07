import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'
import PostInputComponent from '../component/post_input_component'

const PostFormScreen = () => {
    // Handle value
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    // Image picker function
    // const pickImage = async () => {
    //     const options = {
    //         mediaType: 'mixed',
    //         includeBase64: false,
    //         maxHeight: 2000,
    //         maxWidth: 2000,
    //     };

    //     launchImageLibrary(options, (response) => {
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('Image picker error: ', response.error);
    //         } else {
    //             let imageUri = response.uri || response.assets?.[0]?.uri;
    //             setImage(imageUri);
    //         }
    //     });
    // };

    return (
        <ScrollView>
            <View style={tailwind`items-center p-3`}>
                {/* Assets Input */}
                <TouchableOpacity
                    style={tailwind`bg-slate-200 h-70 w-70 items-center justify-center rounded-md`}
                    onPress={() => pickImage()}
                >
                    <View style={tailwind`flex-row items-center`}>
                        <Image
                            source={require('../assets/image.png')}
                            style={tailwind`w-10 h-10`}
                        />
                        <Text style={tailwind`ml-3 text-slate-700`}>Thêm ảnh</Text>
                    </View>
                </TouchableOpacity>

                <View style={tailwind`w-90 mt-10`}>
                    {/* Title Input */}
                    <PostInputComponent
                        inputStyle={'text-lg font-bold'}
                        placeholder={"Tiêu đề"}
                        multilineStatus={false}
                    />

                    {/* Content Input */}
                    <PostInputComponent
                        inputStyle={''}
                        placeholder={"Nội dung"}
                        multilineStatus={true}
                    />
                </View>

                <TouchableOpacity
                    style={tailwind`bg-slate-400 rounded-md p-3 mt-60`}
                >
                    <Text style={tailwind`text-white`}>Đăng bài</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default PostFormScreen