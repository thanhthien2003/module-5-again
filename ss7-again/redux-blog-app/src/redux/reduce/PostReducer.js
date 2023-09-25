import { CREATE_POST, DELETE_POST, GET_ALL_POST } from "../Type";

const postReducer = (posts = [] , action) => {
    const {type,payload} = action;
    switch(type) {
        case GET_ALL_POST:
            {
                return payload;
            }
        case CREATE_POST:
            return [...posts,payload];
        case DELETE_POST:
           return posts = posts.filter((post) => {
                return post.id !== payload
            })
        default: {
            return posts;
        }
    }
}
 
export default postReducer;