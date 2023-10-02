import axios from "axios";
export const getAllType = async () =>{
    try {
        return (await axios.get("http://localhost:8080/type_product")).data
    } catch (error) {
        return error;
    }
}