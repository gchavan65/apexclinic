import React,{ useContext} from 'react'
import {Typography,Button,Stepper , Step , StepLabel ,Box,Grid } from '@material-ui/core';
import MainCard from 'ui-component/cards/MainCard';
import SamplePage from './index' 
import  Packeges from './Packages'
import PersnalDetails from './PersnalDetails';
import  Upload from './Upload'
import Dat from './Dat'
import { makeStyles } from '@material-ui/styles';

import {ValidationContext} from '../sample-page/Context/FormContext'


// import auth
import AuthWrapper1 from '../pages/authentication/AuthWrapper1';
import AuthCardWrapper from '../pages/authentication/AuthCardWrapper';
import Status from './Status';

const useStyles = makeStyles({
  btnbox:{
    marginTop:10,

    display: 'flex',
    flexDirection: 'row'
    
  } ,
  wrapper1: {
 display: 'flex',
 flexDirection: 'column',
 width:"100%",
 height:"100%",
  },
  wrapper2:{
    width:"100%",
    height:"80vh",
  }

})



const LableStepper = () => {
// context
  const {steps,activeState} = useContext(ValidationContext)




const getStepContent = (step) =>{
switch(step){
  
  case 0 :
    return  <PersnalDetails/>

  case 1 :
    return  <SamplePage/>
  
    case 2 :
      return  <Upload/>
   
      case 3 :
       return <Packeges/>
   
        case 4 :
        return <Dat/>
    
         case 5 :
          return <Status/>
     
    default : 
    return null
}
}



   const classes =useStyles()
  
    return (
  
     <>
   <AuthWrapper1 >

                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                         
        <AuthCardWrapper  >
     <MainCard title="eligibility From" >
        <Box  sx={{ width: '100%' }}>
          <Stepper activeStep={activeState} alternativeLabel style={{display:'cover'}}>
            {
              steps.map((steped) => {  
                return  (
                  <Step key={steped}>
              <StepLabel>{steped}</StepLabel>
            </Step>
           
                )
              })
            }
            
          </Stepper>
        </Box>
       
</MainCard>





<form>
 { getStepContent(activeState)}
  </form>
  {activeState === 6 ? 
<Typography variant="h3">Thanks You</Typography> : 
<Box className={classes.btnbox} >



</Box>
}

</AuthCardWrapper>
</Grid>
                          </Grid>
                          </Grid>

</AuthWrapper1>

</>
    )
}

export default LableStepper
