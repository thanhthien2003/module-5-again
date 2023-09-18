import axios from "axios";

export const getList = async () => {
    return (await axios.get("http://localhost:8080/blog")).data;
}