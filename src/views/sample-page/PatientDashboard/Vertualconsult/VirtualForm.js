import React ,{useState}from 'react';
import {Link} from 'react-router-dom'
// material-ui
import { makeStyles } from '@material-ui/styles';
import { Grid, TextField, useMediaQuery, Typography, RadioGroup, FormControlLabel, Radio, Button, Box } from '@material-ui/core';
// import auth
import AuthWrapper1 from '../../../pages/authentication/AuthWrapper1';
import AuthCardWrapper from '../../../pages/authentication/AuthCardWrapper';
// import animate
import AnimateButton from 'ui-component/extended/AnimateButton';
//
import MainCard from 'ui-component/cards/MainCard';



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

const VirtualForm = () => {
    const [accept,accepted] = useState("")
const update = () =>{
   return accepted("accept")
}



    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <>
            <AuthWrapper1>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                               {accept==="" ? <MainCard title={'Virtual Eligibility Form'}>
                                    <Grid container spacing={matchDownSM ? 0 : 2}>
                                        <TextField
                                            fullWidth
                                            id="standard-textarea"
                                            label="Enter SPO2 value Range"
                                            placeholder="SPO2 Range"
                                            multiline
                                            variant="standard"
                                            margin="normal"
                                            name="spo2"
                                            type="number"
                                        />

                                        <TextField
                                            fullWidth
                                            id="standard-textarea"
                                            label="Enter Pulse Rate"
                                            placeholder="Enter Pulse Rate"
                                            multiline
                                            variant="standard"
                                            margin="normal"
                                            name="pulserate"
                                            type="number"
                                        />
                                             <TextField
                                            fullWidth
                                            id="standard-textarea"
                                            label="Enter Body Temp"
                                            placeholder="Body Temp"
                                            multiline
                                            variant="standard"
                                            margin="normal"
                                            name="temp"
                                            type="number"
                                        />
                                             <TextField
                                            fullWidth
                                            id="standard-textarea"
                                            label="Enter Respiratory Rate"
                                            placeholder="Respiratory Rate"
                                            multiline
                                            variant="standard"
                                            margin="normal"
                                            name="Respiratory"
                                            type="number"
                                        />
                                             <TextField
                                            fullWidth
                                            id="standard-textarea"
                                            label="Enter Pulse Rate"
                                            placeholder="Enter Pulse Rate"
                                            multiline
                                            variant="standard"
                                            margin="normal"
                                            name="fname"
                                            type="number"
                                        />
                                             <TextField
                                            fullWidth
                                            id="standard-textarea"
                                            label="Enter Pulse Rate"
                                            placeholder="Enter Pulse Rate"
                                            multiline
                                            variant="standard"
                                            margin="normal"
                                            name="fname"
                                            type="number"
                                        />
                                       
                                       
            
                                    </Grid>
                                </MainCard>:
                                <MainCard>
                                <Typography >Waiting for Doctor confirmation </Typography>
                                <Typography> Doctor will review your Application</Typography>
                                </MainCard>
                                }
                                 {accept==="" ?
                             <Box>   <Button
                       style={{marginLeft: '10px', marginTop: '10px'}}
                           size="large"
                           variant="contained"
                           color="secondary"
                           onClick={e=>update(e)}
                           >
                      Submit
                       </Button>
                       </Box>:null}
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </AuthWrapper1>
        </>
    );
};

export default VirtualForm;
