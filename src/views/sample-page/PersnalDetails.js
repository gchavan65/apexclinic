import React, { useEffect,useContext  } from 'react';
import { ValidatorForm } from "react-material-ui-form-validator";

//  context
import {ValidationContext} from '../sample-page/Context/FormContext'

// material-ui
import { makeStyles } from '@material-ui/styles';
// import packages
import AnimateButton from 'ui-component/extended/AnimateButton';
// project imports


import MainCard from 'ui-component/cards/MainCard';
import {
    Grid,
    TextField,
    useMediaQuery,
    RadioGroup,
    FormControlLabel,
  
    Radio,
   Button, Box
    
} from '@material-ui/core';

// style constant
const useStyles = makeStyles((theme) => ({
    redButton: {
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.grey[100],
        color: theme.palette.grey[700],
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem'
        }
    },
    signDivider: {
        flexGrow: 1
    },
    signText: {
        cursor: 'unset',
        margin: theme.spacing(2),
        padding: '5px 56px',
        borderColor: `${theme.palette.grey[100]} !important`,
        color: `${theme.palette.grey[900]}!important`,
        fontWeight: 500
    },
    loginIcon: {
        marginRight: '16px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '8px'
        }
    },
    loginInput: {
        ...theme.typography.customInput
    }
}));

const PersnalDetails = () => {
    const {onValueChange,handleNext,handleBack,ChangeGender,activeState,formSubmit,updated }  = useContext(ValidationContext)
// constant file
const classes = useStyles();

const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <>
       
     <MainCard title="Persnal Details" >
         <form
     
     
          >
                 <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                           
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    name="fname"
                                    type="text"
                                    defaultValue="Gaurav"
                                    disabled
                                
                                
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    margin="normal"
                                    name="lname"
                                    type="text"
                                    defaultValue="Chavhan"
                                    disabled
                               
                                />
                            </Grid>
                        </Grid>  
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel name="ChangeGender" onChange={e=>ChangeGender(e)} value="Male" control={<Radio />}  label="Male" />
                                <FormControlLabel name="ChangeGender" onChange={e=>ChangeGender(e)} value="Femail" control={<Radio />}  label="Femail" />
                                 {/* <FormControlLabel name="ChangeGender" onChange={e=>ChangeGender(e)} value="Other" control={<Radio />}  label="Other" />  */}
                            </RadioGroup>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Age"
                                    margin="normal"
                                    name="age"
                                    type="number"
                                    defaultValue="Chavhan"
                                    value={updated.age}
                                 onChange={e=>onValueChange(e)}
                             
                                />
                            </Grid>
                        </Grid>  
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                      
                                <TextField
                                    fullWidth
                                    label="Email"
                                    margin="normal"
                                    name="email"
                                    type="email"
                                  required
                                  value={updated.email}
                                 onChange={e=>onValueChange(e)}
                              
                                />
                      
                      
                        </Grid>  
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                    
                                <TextField
                                    fullWidth
                                    label="Mob Number"
                                    margin="normal"
                                    name="Number"
                                    type="Number"
                                    value={updated.number}
                                    required
                                 onChange={e=>onValueChange(e)}
                                />
                        </Grid>  
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                      
                      <TextField
                          fullWidth
                          label="Address"
                          margin="normal"
                          name="address"
                          type="text"
                          defaultValue=""
                          value={updated.address}
                       onChange={e=>onValueChange(e)}
                      />
            
            
              </Grid>  
              <Box style={{display: 'flex', flexDirection: 'row' ,marginTop:10}}>

<AnimateButton>
                       <Button
                           size="large"
                           type="submit"
                           variant="contained"
                           color="secondary"
                           onClick={handleBack} disabled={activeState === 0}
                       >
                           Back
                       </Button>
                   </AnimateButton>
                   <AnimateButton>
                       <Button
                       style={{marginLeft: '10px'}}
                           size="large"
                           type="submit"
                           variant="contained"
                           color="secondary"
                       onClick={handleNext} 
                        
                            >
                     Next
                       </Button>
                   </AnimateButton>

</Box>
</form>
              </MainCard>            
        </>
    )
}

export default PersnalDetails
