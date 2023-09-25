import {useParams} from "react-router-dom";
import {useEffect} from "react";

export function StudentUpdate() {
   const param = useParams();
   useEffect(() => {
       //call API

   }, [])
    return (
        <>
            <h1>Student Update</h1>
            <h1>{param.id}</h1>
        </>
    )
}
