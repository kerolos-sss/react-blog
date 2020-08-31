import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native"
import { BlogContext } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


const CreateScreen = (props) => {


    let { navigation } = props
    // let itemId = navigation.getParam('id');

    let blogPosts = useContext(BlogContext)

    const [title, setTitle] = useState('')

    const [content, setContent] = useState('')

    // let blogPost = blogPosts.state.find((item) => item.id == itemId)

    return <View style={{ flex: 1 }}>
        <Text style={styles.title}>Enter Title:</Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
        />
        <Text
            style={styles.title}
        >Enter Content:</Text>
        <TextInput
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
        />

        <Button  title="Add Blog Post" 
            onPress={
                () => {
                    blogPosts.add(title, content, () => {
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



export default CreateScreen;