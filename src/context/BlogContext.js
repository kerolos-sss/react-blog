import React, { useState, useReducer } from 'react'

const BlogContext = React.createContext();


const blogPostsReducer = (blogPosts, action)=> {
    switch(action.type){
        case "add":
            return [...blogPosts, { title: `Blog post #${blogPosts.length + 1}`}];
        default:
            return blogPosts;

    }
    
    return blogPosts
}


export const BlogProvider = (props) => {

    // const blogPosts = [
    //     { title: "Blog post #1"},
    //     { title: "Blog post #2"},
    // ]

    const [blogPostsState, dispatchBlogPosts] = useReducer( blogPostsReducer, []);

    const addBlogPost = () => {
        dispatchBlogPosts({type: "add"}); //+ new Date()},])
    } 

    return <BlogContext.Provider value={{data: blogPostsState, addBlogPost: addBlogPost}}>
         {props.children}  
    </BlogContext.Provider> 
}

export default BlogContext;