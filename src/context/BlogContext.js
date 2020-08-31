import createDataContext from "./createDataContext";

const blogPostsReducer = (blogPosts, action) => {
    switch (action.type) {
        case "add":
            return [...blogPosts,
            { id: Math.floor(Math.random() * 1000000000), title: `Blog post #${blogPosts.length + 1}` }];
        case "delete":
            return blogPosts.filter((item) => item.id != action.payload);

        default:
            return blogPosts;

    }

    return blogPosts
}

const addBlogPost = (dispatchBlogPosts) => {
    return () => {
        dispatchBlogPosts({ type: "add" }); //+ new Date()},])
    }
}

const deleteBlogPost = (dispatchBlogPosts) => {
    return (id) => {
        dispatchBlogPosts({ type: "delete", payload: id }); //+ new Date()},])
    }
}

export const { Provider: BlogProvider, Context: BlogContext } = createDataContext(blogPostsReducer, { addBlogPost, delete: deleteBlogPost }, []);