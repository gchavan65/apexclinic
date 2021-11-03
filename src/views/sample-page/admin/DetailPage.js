import React,{useContext}  from 'react';
import {List,ListItem ,ListItemText,Button,Box,Typography,Grid,item}  from '@material-ui/core';

// import packages
import AnimateButton from 'ui-component/extended/AnimateButton';

// import context
import {ValidationContext} from '../Context/FormContext'
import {Approve} from '../Context/ApprovalConetx'

// import cards
import MainCard from 'ui-component/cards/MainCard';

const DetailPage = () => {
    const {updated,activeState,proUpdate,Upload}  = useContext(ValidationContext)
    const {approved,rejected}  = useContext(Approve)
    return (
        <>
       {activeState === 5 ? 
       <Box>
       <MainCard title="Patient Data">
        <List>
              <ListItem>
                <ListItemText primary="FirstName" secondary="Gaurav" />  <ListItemText primary="LastName" secondary="Chavhan" />
              </ListItem>
              <ListItem> 
                <ListItemText primary="Email" secondary={updated.email} />      <ListItemText primary="Mob Number" secondary={updated.number} />  
              </ListItem>
              <ListItem> 
                <ListItemText primary="Address" secondary={updated.address} />      <ListItemText primary="Age" secondary={updated.age} />  
              </ListItem>
              <Grid item lg={6} xs={12}>
                    <Grid container justifyContent="center" alignItems="center" lg={6} sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item lg={6} sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <Box style={{textAlign:'center'}} >
              <img src={proUpdate} alt="no img" style={{width: '250px', height: '250px'}} />  
              <Typography style={{fontWeight:"bold"}}>ProfilePicture</Typography>
              </Box>
              
              <Box style={{textAlign:'center'}}>
              <img src={Upload} alt="no img" style={{width: '250px', height: '250px'}} />  
              <Typography style={{fontWeight:"bold"}} >Adharcard</Typography>
              </Box> 
              </Grid>
              </Grid>
              </Grid>
              </List>
        </MainCard>
              <MainCard title="symptoms Data">
              <Box className="PatientEligibility"> 
              <List>
              <ListItem>
                <ListItemText primary="Do You Have Cought ?" secondary={updated.answer1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do You Have Cold ?" secondary={updated.answer2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do You Have Sore Throat" secondary={updated.answer3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="are You Experencing Body Aches ?" secondary={updated.answer4} />
              </ListItem>
              <ListItem>
                <ListItemText primary="are You Have Fever?" secondary={updated.answer5} />
              </ListItem>
              <ListItem>
                <ListItemText primary="are You Have difficulty to Breathing ?" secondary={updated.answer6} />
              </ListItem>
              <ListItem>
                <ListItemText primary="are You Have experience to Fatigue ?" secondary={updated.answer7} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Have u travel history during the past 14 days?" secondary={updated.answer8} />
              </ListItem>
              </List>
              </Box> 
              :
             
                  </MainCard>   

                  <MainCard title="Payments">
                    <List>
                    <ListItem>
                <ListItemText primary="Upload ProfilePicture" secondary={updated.uploadprofilepicture} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="Upload Adhar" secondary={updated.uploadAdhar} /> 
              </ListItem>
                    </List>
                     <List>
                    <ListItem>
                <ListItemText primary="Packages" secondary={updated.Pack} /> 
              </ListItem>
              </List>
              <List>
               <Box style={{display: 'flex', flexDirection: 'row' ,marginTop:10}}>

          
              
              <Button
                            size="large"
                            type="submit"
                            variant="contained"
                            color="success"
                            onClick={e=>approved(e)} 
                        >
                            Approved
                        </Button>
                        <Button
                        style={{marginLeft:'20px'}}
                            size="large"
                            type="submit"
                            variant="contained"
                            color="error"
                            onClick={e=>rejected(e)} 
                        >
                      Reject
                        </Button>
              
                     
                 </Box> 
</List>
              </MainCard>
              </Box>
              :
          <Box>
              <MainCard>
                  <h1>no data field by user</h1>
                  </MainCard> 
          </Box>
              }
        </>
    )
}

export default DetailPage
