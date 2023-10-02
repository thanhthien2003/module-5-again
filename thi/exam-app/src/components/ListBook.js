import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findByNameOrTypeBook, getAllBook } from "../services/BookService";
import "bootstrap/dist/css/bootstrap.css";
import { getAllTypeBook } from "../services/TypeBookService";

function ListBook() {
    const [bookList, setBookList] = useState(null);
    const [nameSearch, setNameSearch] = useState("");
    const [typeSearch, setTypeSearch] = useState("");
    const [listTypeBook, setListTypeBook] = useState(null);
    const getTypeBook = async () => {
        setListTypeBook(await getAllTypeBook());
    }

    const getBookList = async () => {
        setBookList(await findByNameOrTypeBook(nameSearch, typeSearch));
    }

    useEffect(() => {
        getBookList();
        getTypeBook();
    }, [nameSearch, typeSearch])

    if (bookList == null) {
        return null;
    }

    if (listTypeBook == null) {
        return null;
    }

    console.log(bookList);
    if (bookList.length === 0) {
        return (
            <>
            <h1  style={{textAlign:'center'}}>BOOK LIST</h1>
                <label>Name book search:</label>
                <input className="form-control" style={{width:'200px'}} onChange={(event) => setNameSearch(event.target.value)} />
                <br />
                <br />
                <h1  style={{textAlign:'center'}}>No information book like name search you enter !!</h1>
            </>
        )
    }

    return (
        <>
        <h1  style={{textAlign:'center'}}>BOOK LIST</h1>
            <label htmlFor="name">Name book search:</label>
            <input className="form-control" style={{width:'200px'}} id="name" onChange={(event) => setNameSearch(event.target.value)} />
            <br />
            <br />
            <label htmlFor="type">Type book search:</label>
            <select className="form-control" style={{width:'200px'}} id="type" onChange={(event) => setTypeSearch(event.target.value)}>
                <option value={""}>----</option>
                {listTypeBook.map((type) => {
                    return(
                        <>
                        <option value={type.name}>{type.name}</option>
                        </>
                    )
                })}
            </select>
            <br />
            <br />
            <Link className="btn btn-primary" to={"/create"}>Create</Link>
            <table className="table table-hover">
                <thead>
                    <th>STT</th>
                    <th>Book Id</th>
                    <th>Book name</th>
                    <th>Type book</th>
                    <th>Day start</th>
                    <th>Count</th>
                </thead>
                <tbody>
                    {bookList.map((book, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{book.idBook}</td>
                                    <td>{book.name}</td>
                                    <td>{book.typeBook.name}</td>
                                    <td>{book.dayStart}</td>
                                    <td>{book.count}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
export default ListBook;