import axios from "axios";

export const getAllService =async () => {
    try {
        return await axios.get("http://localhost:8080/service").data
    } catch (error) {
        return error;
    }
}
export const createService = async (serviceOj) => {
    try {
        return await axios.post("http://localhost:8080/service",serviceOj);
    } catch (error) {
        return error;
    }
}
export const findByIdService = async (idService) => {
    try {
        return await axios.get(`http://localhost:8080/service/${idService}`).data;
    } catch (error) {
        return error;
    }
}
export const updateService = async (idUpdate,serviceOj) => {
    try {
        return await axios.put(`http://localhost:8080/service/${idUpdate}`,serviceOj);
    } catch (error) {
        return error;
    }
}
export const deleteService = async (idDelete) => {
    try {
        return await axios.delete(`http://localhost:8080/service/${idDelete}`);
    } catch (error) {
        return error;
    }
}
