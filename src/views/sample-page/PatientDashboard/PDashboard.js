import React,{useContext}  from 'react';
import Approval from './Approval'
// context
import {Approve} from '../Context/ApprovalConetx'
import WatingApproval from './WatingApproval';

const PDashboard = () => {
  const {status}  = useContext(Approve)
    return (
        <>
        {status === "Approved" ? <Approval/>:<WatingApproval/>}
        </>
    )
}

export default PDashboard
