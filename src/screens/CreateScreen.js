import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native"
import { BlogContext } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import BlogPostForm from '../components/BlogPostForm'


const CreateScreen = (props) => {


    let { navigation } = props

    let blogPosts = useContext(BlogContext)

    return <View style={{ flex: 1 }}>
        <BlogPostForm
            title={""}
            content={""}
            formLabel={`Create Blog Post`}
            titleLabel="Add Title:"
            contentLabel="Add Content:"
            onSubmit={ ({title, content}) => {
                blogPosts.add(title, content, () => {
                    navigation.navigate("Index");
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



export default CreateScreen;