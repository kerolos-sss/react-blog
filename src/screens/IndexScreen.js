import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from "react-native"
import BlogContext from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'



const IndexScreen = (props) => {

    let blogPosts = useContext(BlogContext)

    return <View style={{ flex: 1}}>
        <Text>IndexScreen</Text>
        <Button 
            title="Add Blog Post"
            onPress={blogPosts.addBlogPost} 
        />
        <FlatList 
            data={blogPosts.data}
            keyExtractor={(p)=> p.title}
            renderItem={({item}) => {
                return <Text>{item.title}</Text>
            }}
        />
    </View>
}


let styles = StyleSheet.create({

})



export default IndexScreen;