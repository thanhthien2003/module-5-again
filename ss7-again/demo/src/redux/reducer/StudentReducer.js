import {CREATE_STUDENT, GET_ALL_STUDENT} from "../Types";

const studentReducer = (students= [], action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_STUDENT: {
            return payload;
        }
        case CREATE_STUDENT: {
            return [...students, payload];
        }
        default: {
            return students;
        }
    }
}

export default studentReducer;
