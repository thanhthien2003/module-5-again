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
        return (await axios.get(`http://localhost:8080/customer/name_like=${name}`)).data
    } catch (error) {
        return error;
    }
}

export const updateCustomer = async (customer) => {
    try {
        return (await axios.put(`http://localhost:8080/customer/${customer.id}`,customer));
    } catch (e) {
        return e;
    }
}
export const findByIdCustomer = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/customer/${id}`)).data
    } catch (error) {
        return error;
    }
} 