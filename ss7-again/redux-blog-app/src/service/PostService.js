import axios from "axios"

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/posts');
        return result.data;
    } catch (e) {
        return e;
    }

}

export const createPost = async (post) => {
    try {
        const result = await axios.post('http://localhost:8080/posts', post)
        return result.data
    } catch (e) {
        return e;
    }
}

export const deletePost = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/posts/${id}`)
        return result;
    } catch (error) {
        return error;
    }
}