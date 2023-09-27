import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../simple/Header";
import Footer from "../simple/Footer";
import { getAllContract } from "../../service/ContractService";
import { NavLink } from "react-router-dom";

function ListContract() {
    const [contractList, setContractList] = useState([]);
    const [totalPage, setTotalPage] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [refresh, setRefresh] = useState(true);
    const limit = 5;
    const getList = async () => {
       getAllContract(currentPage, limit).then(res => {
        setContractList(res[1]);
        setTotalPage(Math.ceil(res[0] / limit));
       });
    }

    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
            setRefresh(!refresh);
        }
    }
    const prePage = () => {
        setCurrentPage(currentPage - 1);
        setRefresh(!refresh);
    }

    useEffect(() => {
        getList(currentPage,limit);
    
    }, [refresh])

    return (
        <>
            <Header />
            <div>
                <NavLink to={`/contract/create`} className="btn btn-primary">New Contract</NavLink>
            </div>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Contract number</th>
                        <th>Day start</th>
                        <th>Day end</th>
                        <th>Down Payment</th>
                        <th>Total amount</th>
                    </tr>
                </thead>
                <tbody>
                    {contractList.map((contract, index) => {
                        return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{contract.contractKey}</td>
                                    <td>{contract.dayStart}</td>
                                    <td>{contract.dayEnd}</td>
                                    <td>{contract.downPayment}</td>
                                    <td>{contract.totalAmount}</td>
                                </tr>       
                        )
                    })}

                </tbody>
            </table>
            {contractList.length ===0 ? "" : 
             <div style={{ whiteSpace: 'nowrap' }}>
             <div style={{ display: 'inline-block', marginRight: '10px' }}>
                 <button onClick={() => prePage()} className={`btn btn-primary ${currentPage <= 1 ? "disabled" : ""}`} >Previous</button>
             </div>
             <div style={{ display: 'inline-block' }}>
                 <button onClick={() => nextPage()} className={`btn btn-primary ${currentPage >= totalPage ? "disabled" : ""}`}>Next</button>
             </div>
         </div>
            }
           
            <Footer />
        </>
    )
}
export default ListContract;