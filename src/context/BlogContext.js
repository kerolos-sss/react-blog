import React, { useState } from 'react'

const BlogContext = React.createContext();
export const BlogProvider = (props) => {

    // const blogPosts = [
    //     { title: "Blog post #1"},
    //     { title: "Blog post #2"},
    // ]

    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog post #${blogPosts.length + 1}`}] ); //+ new Date()},])
    } 

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
         {props.children}  
    </BlogContext.Provider> 
}

export default BlogContext;