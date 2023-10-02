import axios from "axios";

export const getAllTypeBook = async () => {
    try {
        return (await axios.get("http://localhost:8080/typeBook")).data;
    } catch (error) {
        return error;
    }
}