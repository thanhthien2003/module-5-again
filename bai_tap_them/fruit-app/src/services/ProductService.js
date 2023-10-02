import axios from "axios";

export const getAllProduct = async () => {
    try {
        return (await axios.get("http://localhost:8080/produc")).data
    } catch (error) {
        return error;
    }
}

export const createProduct = async (product) => {
    try {
        return await axios.post("http://localhost:8080/produc",product);
    } catch (error) {
        return error;
    }
}
export const findByIdProduct = async (productId) => {
    try {
        return (await axios.get(`http://localhost:8080/produc/${productId}`)).data
    } catch (error) {
        return error;
    }
}
export const editProduct = async (product) => {
    try {
        return await axios.put(`http://localhost:8080/produc/${product.id}`,product);
    } catch (error) {
        return error;
    }
}
export const deleteProduct = async (productId) => {
    try {
        return await axios.delete(`http://localhost:8080/produc/${productId}`)
    } catch (error) {
        return error;
    }
}
export const findByNameOrType = async (name,type) => {
    try {
        if(type!==""){
            return (await axios.get(`http://localhost:8080/produc?nameLike=${name}&typeProduct.body=${type}`)).data
        }else{
            return (await axios.get(`http://localhost:8080/produc?nameLike=${name}`)).data
        }
        
    } catch (error) {
        return error;
    }
}