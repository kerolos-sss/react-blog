import createDataContext from "./createDataContext";

const blogPostsReducer = (blogPosts, action) => {
    switch (action.type) {
        case "add":
            return [...blogPosts,
            {
                id: Math.floor(Math.random() * 1000000000),
                title: action.payload.title,
                content: action.payload.content
            }];
        case "delete":
            return blogPosts.filter((item) => item.id != action.payload);
        case "edit":
            let item = blogPosts.find((item) => item.id == action.payload.id);
            item.title = action.payload.title;
            item.content = action.payload.content;
            return [...blogPosts]
        default:
            return blogPosts;

    }

    return blogPosts
}

const addBlogPost = (dispatchBlogPosts) => {
    return (title, content, callback) => {
        dispatchBlogPosts({ type: "add", payload: { title, content } }); //+ new Date()},])
        callback();
    }
}

const deleteBlogPost = (dispatchBlogPosts) => {
    return (id) => {
        dispatchBlogPosts({ type: "delete", payload: id }); //+ new Date()},])
    }
}

const editBlogPost = (dispatchBlogPosts) => {
    return (id, title, content, callback) => {
        dispatchBlogPosts({ type: "edit", payload: { id, title, content } }); //+ new Date()},])
        callback();

    }
}

export const { Provider: BlogProvider, Context: BlogContext } = createDataContext(blogPostsReducer, { add: addBlogPost, delete: deleteBlogPost, edit: editBlogPost }, 
    [{id: 1, title: " TEST POST", content: "TEST CONTENT"}]);