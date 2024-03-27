import React from 'react'
import { Text, View } from 'react-native'
import PostItems from '../../component/post_items';
import tailwind from 'twrnc';

const HomeTab = () => {
  const PostValue = [{
    id: 1,
    postContent: 'Yeet',
    postAssets: '',
    postLiked: 5,
    commentId: "",
    userId: "No one",
    created_at: '30/3/2024',
  }];

  return (
    <View style={tailwind `mt-5`}>
      {PostValue.map((item) => {
        return <PostItems posts={item}/>
      })}
    </View>
  )
}

export default HomeTab