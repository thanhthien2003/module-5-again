import axios from "axios";

export const getAllService =async () => {
    try {
        return (await axios.get("http://localhost:8080/facility")).data
    } catch (error) {
        return error;
    }
}
export const createService = async (serviceOj) => {
    try {
        return await axios.post("http://localhost:8080/facility",serviceOj);
    } catch (error) {
        return error;
    }
}
export const findByIdService = async (idService) => {
    try {
        return (await axios.get(`http://localhost:8080/facility/${idService}`)).data;
    } catch (error) {
        return error;
    }
}
export const updateService = async (serviceOj) => {
    try {
        return await axios.put(`http://localhost:8080/facility/${serviceOj.id}`,serviceOj);
    } catch (error) {
        return error;
    }
}
export const deleteService = async (idDelete) => {
    try {
        return await axios.delete(`http://localhost:8080/facility/${idDelete}`);
    } catch (error) {
        return error;
    }
}
