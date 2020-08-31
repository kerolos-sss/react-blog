import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native"
import { BlogContext } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import BlogPostForm from '../components/BlogPostForm'


const EditScreen = (props) => {


    let { navigation } = props
    let itemId= navigation.getParam('id');

    let blogPosts = useContext(BlogContext)
    let blogPost = blogPosts.state.find((item) => item.id == itemId)

    const [title, setTitle] = useState(blogPost.title)

    const [content, setContent] = useState(blogPost.content)


    return <View style={{ flex: 1 }}>
       
       <BlogPostForm 
            title={blogPost.title}
            content={blogPost.content}
            formLabel={`Edit Blog Post - ${itemId}`}
            titleLabel="Edit Title:"
            contentLabel="Edit Content:"
            onSubmit={ ({title, content}) => {
                blogPosts.edit(itemId, title, content, () => {
                    navigation.pop();
                });
            }}
       
        />

    </View>
}


let styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black'
    },
    title: {
        fontSize: 20,
        marginBottom: 10
    },

})



export default EditScreen;