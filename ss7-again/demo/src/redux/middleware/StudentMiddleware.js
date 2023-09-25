import * as studentService from "../../services/StudentService"
import {CREATE_STUDENT, GET_ALL_STUDENT} from "../Types";

export const getAllStudent = () => async (dispatch) => {
       const res = await studentService.getAll();
       dispatch({
           type: GET_ALL_STUDENT,
           payload: res
       })

}

export const addStudent = (value) => async (dispatch) => {
    const res = await studentService.create(value);

    dispatch({
        type: CREATE_STUDENT,
        payload: value
    })
}
