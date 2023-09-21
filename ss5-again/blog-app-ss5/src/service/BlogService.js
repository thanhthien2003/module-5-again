import axios from "axios";

export const getAllBlog = async () => {
  return (await axios.get("http://localhost:8080/blog")).data
}

export const createBlog = async (blog) => {
    await axios.post("http://localhost:8080/blog",blog);
}