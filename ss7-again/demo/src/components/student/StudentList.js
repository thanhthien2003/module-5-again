import {useEffect, useState} from "react";
import axios from "axios";
import * as studentService from "../../services/StudentService"
import {useDispatch, useSelector} from "react-redux";
import {getAllStudent} from "../../redux/middleware/StudentMiddleware";

export function StudentList() {
    const students = useSelector(store => store.students)
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    useEffect(() => {
        dispatch(getAllStudent());
    }, []);

    // useEffect(() => {
    //     searchName();
    // }, [name]);
    //
    // const searchName = async () => {
    //     setStudents(await studentService.getAllByName(name));
    // }

    return (
        <>
            <h1>Student List</h1>
            <input type="text" onChange={(event) => setName(event.target.value)}/>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Language</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.gender == 1 ? 'Male' : 'Female'}</td>
                            <td>
                                {
                                    student.languages.map((language, index) => (
                                        <span key={index}>{language + ', '}</span>
                                    ))
                                }
                            </td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
