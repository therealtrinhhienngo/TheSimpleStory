import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'
import { Routes } from '../config/routes_config'

const SearchScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={tailwind`bg-white p-3`}>
            {/* Custom Appbar */}
            <View style={tailwind`flex-row items-center`}>
                {/* Back button */}
                <TouchableOpacity
                    style={tailwind`mx-3`}
                    onPress={() => { navigation.goBack() }}
                >
                    <Image
                        source={require('../assets/back.png')}
                        style={tailwind`w-8 h-8`}
                    />
                </TouchableOpacity>


                {/* SearchBar */}
                <View style={tailwind`bg-white border border-slate-500 flex-row items-center ml-3 rounded-md`}>
                    {/* Icon */}
                    <TouchableOpacity
                        onPress={() => {navigation.navigate(Routes.SearchResultScreen)}}
                    >
                        <Image
                            source={require('../assets/search_icon.png')}
                            style={tailwind`w-6 h-6 ml-3`}
                        />
                    </TouchableOpacity>

                    {/* TextInput */}
                    <TextInput
                        style={tailwind`w-70 p-3`}
                        placeholder='Search your story'
                    />
                </View>
            </View>

            {/* List Search */}
        </View>
    )
}

export default SearchScreen