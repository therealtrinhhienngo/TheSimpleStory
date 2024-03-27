import React from 'react'
import { Image, Text, View } from 'react-native'
import tailwind from 'twrnc'

const PostItems = ({ posts }) => {
  console.log(posts.created_at)
  return (
    <View style={tailwind `bg-slate-200 p-3 w-96 self-center rounded-md`}>
      {/* Account Value */}
      <View style={tailwind `flex-row items-center`}>
        {/* Avatar */}
        <Image
          source={{ uri: "https://i.pinimg.com/474x/e8/52/c2/e852c2a28f7753c7e7ac7b144a6750f0.jpg" }}
          style={tailwind `w-12 h-12 rounded-full`}
        />

        {/* Username & Date */}
        <View style={tailwind `ml-3`}>
          <Text style={tailwind `font-bold text-black`}>Username</Text>
          <Text>{posts.created_at}</Text>
        </View>
      </View>

      {/* Post Container */}
      <View>
        {/* Assets */}

        {/* Post Content */}
      </View>

      {/* Likes & Comment */}
      <View>
        {/* Likes */}

        {/* Comment */}
      </View>
    </View>
  )
}

export default PostItems