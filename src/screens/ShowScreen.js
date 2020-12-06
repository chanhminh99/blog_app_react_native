import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Context as BlogContext} from '../context/BlogContext'
import {EvilIcons} from '@expo/vector-icons'
const ShowScreen = ({navigation}) => {
  const {state} = useContext(BlogContext)

  const blogPost = state.find(
    (blog) => blog['id'] === navigation.getParam('id')
  )
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', {id: navigation.getParam('id')})
        }>
        <EvilIcons name='pencil' size={35} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({})

export default ShowScreen
