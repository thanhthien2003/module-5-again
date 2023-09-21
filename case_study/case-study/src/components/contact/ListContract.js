import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../simple/Header";
import Footer from "../simple/Footer";
import {getAllContract} from "../../service/ContractService";

function ListContract() {
    const [contractList, setContractList] = useState([]);
    const getList = async () => {
        setContractList(await getAllContract());
    }

    useEffect(() => {
        getList();
    }, [])
    return (
        <>
            <Header />
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
                            <>
                                <tr key={contract.id}>
                                    <td>{index + 1}</td>
                                    <td>{contract.contractKey}</td>
                                    <td>{contract.dayStart}</td>
                                    <td>{contract.dayEnd}</td>
                                    <td>{contract.downPayment}</td>
                                    <td>{contract.totalAmout}</td>
                                </tr>
                            </>
                        )
                    })}

                </tbody>
            </table>
            <Footer />
        </>
    )
}
export default ListContract;