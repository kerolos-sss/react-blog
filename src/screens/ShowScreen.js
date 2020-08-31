import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import { BlogContext } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'
import { EvilIcons } from '@expo/vector-icons'


const ShowScreen = (props) => {
 

    let { navigation } = props
    let itemId = navigation.getParam('id');

    let blogPosts = useContext(BlogContext)

    let blogPost = blogPosts.state.find((item) => item.id == itemId)

    return <View style={{ flex: 1 }}>
        <Text>{blogPost.title} - {blogPost.id}</Text>
        <Text>{blogPost.content} </Text>
    </View>
}


let styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        // borderBottomWidth: 1,
        borderColor: 'red'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }

})

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', {id : navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}

export default ShowScreen;