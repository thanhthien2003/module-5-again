import axios from "axios" 

export const getAllCategory = async () => {
    return (await axios.get("http://localhost:8080/category")).data
}