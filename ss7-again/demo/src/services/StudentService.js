import axios from "axios";

export const getAllByName = async (data) => {
    try {
        const res = await axios.get("http://localhost:8080/students?name_like="+data);
        return res.data;
    } catch (e) {
        alert("Không có dữ liệu")
    }
}


export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/students");
       return res.data;
    } catch (e) {
        alert("Không có dữ liệu")
    }
};

export const create = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/students", data)
        return res;
    } catch (e) {

    }
}
