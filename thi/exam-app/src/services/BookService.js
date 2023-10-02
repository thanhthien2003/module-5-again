import axios from "axios";

export const getAllBook = async () => {
    try {
        return (await axios.get("http://localhost:8080/Book")).data;
    } catch (error) {
        return error;
    }
}
export const createBook = async (book) => {
    try {
        return (await axios.post("http://localhost:8080/Book", book));
    } catch (error) {
        return error;
    }
}

export const findByNameOrTypeBook = async (nameBook, typeBook) => {
    try {
        if (typeBook == "") {
            return (await axios.get(`http://localhost:8080/Book?name_like=${nameBook}`)).data
        } else{
            return (await axios.get(`http://localhost:8080/Book?name_like=${nameBook}&typeBook.name=${typeBook}`)).data
        }
    } catch (error) {
        return error;
    }
}