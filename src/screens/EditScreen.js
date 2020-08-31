import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native"
import { BlogContext } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


const EditScreen = (props) => {


    let { navigation } = props
    let itemId= navigation.getParam('id');

    let blogPosts = useContext(BlogContext)
    let blogPost = blogPosts.state.find((item) => item.id == itemId)

    const [title, setTitle] = useState(blogPost.title)

    const [content, setContent] = useState(blogPost.content)


    return <View style={{ flex: 1 }}>
        <Text style={styles.title}>Editing - {itemId}</Text>

        <Text 
            style={styles.title}
        >Edit Title:</Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
        />
        <Text
            style={styles.title}
        >Edit Content:</Text>
        <TextInput
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
        />

        <Button  title="Add Blog Post" 
            onPress={
                () => {
                    blogPosts.edit(itemId, title, content, () => {
                        navigation.navigate("Index");
                    });
                }
            }
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