import axios from "axios";

export const getAll = async () => {
    const result = await axios.get("http://localhost:8080/customer");
    return result.data;
}

export const createCustomer = async (customer) => {
    await axios.post("http://localhost:8080/customer",customer);
}
export const findByName = async (name) => {
    try {
        return (await axios.get(`http://localhost:8080/service/name_like=${name}`)).data
    } catch (error) {
        return error;
    }
}