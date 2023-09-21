import axios from "axios";

export const getList = async () => {
    return (await axios.get("http://localhost:8080/blog")).data;
}

export const createBlog = async (blog) => {
    return await axios.post("http://localhost:8080/blog",blog);
}

export const deleteBlog = async (idBlog) => {
    return await axios.delete(`http://localhost:8080/blog/${idBlog}`);
}

export const findByIdBlog = async (idBlog) => {
    return (await axios.get(`http://localhost:8080/blog/${idBlog}`)).data;
}

export const editBlog = async (idBlog,blog) => {
    return await axios.put(`http://localhost:8080/blog/${idBlog}`,blog);
}
