import axios from "axios";

export const getAllContract = async () => {
    try {
        return (await axios.get("http://localhost:8080/contract")).data;
    } catch (error) {
        return error;
    }
}
export const createContract = async (contract) => {
    try {
        return (await axios.post("http://localhost:8080/contract",contract));
    } catch (e) {
        return e;
    }
}
export const findByIdContract = async (idContract) => {
    try {
        return (await axios.get(`http://localhost:8080/contract/${idContract}`)).data;
    } catch (error) {
        return error;
    }
}
export const updateContract = async (idUpdate,contract) => {
    try {
        return (await axios.put(`http://localhost:8080/contract/${idUpdate}`,contract))
    } catch (error) {
        return error;
    }
}
export const deleteContract = async (idDelete) => {
    try {
        return (await axios.delete(`http://localhost:8080/contract/${idDelete}`))
    } catch (error) {
        return error;
    }
}