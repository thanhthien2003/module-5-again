import axios from "axios";

export const getAllType = async () => {
    const result = await axios.get("http://localhost:8080/typeOfCustomer");
    return result.data;
}