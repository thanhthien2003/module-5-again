import axios from "axios";

export const getAllProduct = async () => {
    try {
        return (await axios.get("http://localhost:8080/product")).data
    } catch (error) {
        return error;
    }
}

export const createProduct = async (product) => {
    try {
        return (await axios.post("http://localhost:8080/product",product))
    } catch (error) {
        return error;
    }
}

export const deleteProduct = async (id) => {
    try {
        return (await axios.delete(`http://localhost:8080/product/${id}`))
    } catch (error) {
        return error;
    }
}