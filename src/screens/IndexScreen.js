import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native"
import { BlogContext } from '../context/BlogContext'
import { FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'


const IndexScreen = (props) => {

    let { navigation } = props
    let blogPosts = useContext(BlogContext)
    // console.log(navigation)
    console.log("Index start")
    console.log(blogPosts)
    
    useEffect(() => {
        blogPosts.getAll()
        const listener =  navigation.addListener('didFocus', () => {
            blogPosts.getAll();
        });
        return () => {
            listener.remove();
        }
    }, [])

    return <View style={{ flex: 1 }}>
        <Text>IndexScreen</Text>
        {/* <Button
            title="Add Blog Post"
            onPress={blogPosts.add}
        /> */}
        <FlatList
            data={blogPosts.state}
            keyExtractor={(p) => p.id}
            renderItem={({ item, index }) => {
                return <TouchableOpacity onPress={() => navigation.navigate("Show", { ...item, id: item.id })}>
                    <View style={styles.row}>
                        <Text
                            style={styles.title}
                        >
                            {item.title} - {item.id}
                        </Text>
                        <TouchableOpacity onPress={() => blogPosts.delete(item.id)}>
                            <Feather
                                style={styles.icon}
                                name="trash" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }}
        />
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
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }

})

IndexScreen.navigationOptions = ({ navigation }) => {
    // console.log(navigation)
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
}

export default IndexScreen;


