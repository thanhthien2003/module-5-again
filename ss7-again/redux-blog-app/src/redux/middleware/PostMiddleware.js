import { createPost, deletePost, findAll } from "../../service/PostService"
import { CREATE_POST, DELETE_POST, GET_ALL_POST } from "../Type";

export const getAllPost  = () =>  async (dispatch) => {
    const res = await findAll();
    dispatch({
        type: GET_ALL_POST,
        payload: res
    })
}

export const addPost = (post) => async (dispatch) => {
    const res = await createPost(post);
    dispatch({
        type: CREATE_POST,
        payload: post
    }) 
}

export const deletePostRedux = (id) => async (dispatch) => {
    const res = await deletePost(id);
    dispatch({
        type: DELETE_POST,
        payload: id
    })
}