import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native"
import { BlogContext } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


const BlogPostForm = (props) => {




    const [title, setTitle] = useState(props.title)

    const [content, setContent] = useState(props.content)


    return <View style={{ flex: 1 }}>
        <Text style={styles.title}>{props.formLabel}</Text>

        <Text
            style={styles.title}
        >{props.titleLabel}</Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
        />
        <Text
            style={styles.title}
        >{props.contentLabel}</Text>
        <TextInput
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
        />

        <Button title="Save Blog Post"
            onPress={
                () => {
                    props.onSubmit({title, content})
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



export default BlogPostForm;