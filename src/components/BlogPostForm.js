import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

const BlogPostForm = ({onSubmit, initialValue}) => {
  const [title, setTitle] = useState(initialValue.title)
  const [content, setContent] = useState(initialValue.content)

  //   useEffect(() => {
  //     if (initialValue) {
  //       setTitle(initialValue.title)
  //       setContent(initialValue.content)
  //     }
  //   }, [])

  return (
    <View style={styles.wrapperStyle}>
      <Text style={styles.labelStyle}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(value) => setTitle(value)}
        autoCapitalize='none'
      />
      <Text style={styles.labelStyle}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(value) => setContent(value)}
        autoCapitalize='none'
      />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          onSubmit(title, content)
        }}>
        <Text style={styles.textButtonStyle}>Save this Post</Text>
      </TouchableOpacity>
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValue: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  wrapperStyle: {
    paddingHorizontal: 10
  },
  inputStyle: {
    height: 30,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black'
  },
  labelStyle: {
    fontSize: 24,
    marginVertical: 16
  },
  buttonStyle: {
    backgroundColor: '#14678d',
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'center'
  },
  textButtonStyle: {
    fontSize: 24,
    color: '#fff'
  }
})

export default BlogPostForm
