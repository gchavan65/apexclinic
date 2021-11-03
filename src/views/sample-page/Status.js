import React,{useContext}  from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Typography,Card,CardContent,CardActions,Button,Box} from '@material-ui/core';
import {Approve} from '../sample-page/Context/ApprovalConetx'
import {Link} from 'react-router-dom'


const Status = () => {
  const {status}  = useContext(Approve)

  const Stat = () =>{
 
    if(status === ''){
      return ( <Typography  style={{ fontWeight: 'bold', margintTop: 5 ,color:'orange'}}>Waiting For Approval</Typography>)
    }
    else if (status === 'Approved'){
      return ( <>
      <Box style={{ textAlign: 'center' }}> 
             <Typography  style={{ fontWeight: 'bold', margintTop: 5 ,color:'Green'}}>Apllication Approval</Typography>
<Link exact to="/sample-page/PatientDashboard/PDashboard">
      <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            color="success">
                            
                            Home
                        </Button>
                        </Link>
                        </Box>

      </>
      )
    }
    else if (status === 'Rejected'){
      return ( <Typography  style={{ fontWeight: 'bold', margintTop: 5 ,color:'Red'}}>Application Rejected</Typography>)
    }
  }

    return (
        <>
      <MainCard title="Status">
      <Card >
    <CardContent>
   
<Stat/>

    </CardContent>
    <CardActions>
    </CardActions>
</Card>

          </MainCard>    
        </>
    )
}

export default Status
