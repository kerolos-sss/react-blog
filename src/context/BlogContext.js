import createDataContext from "./createDataContext";
import jsonServer from '../api/jsonServer'
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
        case "getAll":
            return [...action.payload]
        default:
            return blogPosts;

    }

    return blogPosts
}

const getAllBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get("/blogposts")
        await dispatch({ type: 'getAll', payload: response.data })
    }
}



const addBlogPost = (dispatchBlogPosts) => {
    return async (title, content, callback) => {
        // dispatchBlogPosts({ type: "add", payload: { title, content } }); //+ new Date()},])
        const response = await jsonServer.post("/blogposts", { title, content })

        callback();
    }
}

const deleteBlogPost = (dispatchBlogPosts) => {
    return async (id) => {
        const response = await jsonServer.delete(`/blogposts/${id}`)
        dispatchBlogPosts({ type: "delete", payload: id }); //+ new Date()},])

    }
}

const editBlogPost = (dispatchBlogPosts) => {
    return async (id, title, content, callback) => {
        const response = await jsonServer.put(`/blogposts/${id}`, {title, content})
        dispatchBlogPosts({ type: "edit", payload: { id, title, content } }); //+ new Date()},])
        callback();
    }
}

export const { Provider: BlogProvider, Context: BlogContext } = createDataContext(blogPostsReducer, { getAll: getAllBlogPosts, add: addBlogPost, delete: deleteBlogPost, edit: editBlogPost },
    [ //{id: 1, title: " TEST POST", content: "TEST CONTENT"}
    ]);