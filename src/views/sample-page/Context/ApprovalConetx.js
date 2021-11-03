import { useState  ,createContext} from "react";

export const Approve = createContext()

const ApproveProvider = (props) =>{
    const [status , setStatus] = useState("")

const approved = () =>{
  setStatus("Approved")
}

const rejected = () =>{
  setStatus("Rejected")
}
    

      const onValueChange = (e) =>{
        const {value , name} = e.target
        setUpdates({
            ...status,
            [name]:value
          });
      console.log(`${name}:${value}`)
      }

      const state = {
        status,setStatus,onValueChange,approved,rejected
    } 
    
return(
    <Approve.Provider value={state}>
{props.children}
    </Approve.Provider>
)
}

export default ApproveProvider