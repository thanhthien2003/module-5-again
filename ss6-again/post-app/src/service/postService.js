import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/posts');
        return result.data;
    } catch (e) {

    }

}

export const createPost = async (post) => {
    try {
        const result = await axios.post('http://localhost:8080/posts', post)
        return result.data
    } catch (e) {

    }

}