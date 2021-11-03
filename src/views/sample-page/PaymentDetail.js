import React from 'react'
import MainCard from 'ui-component/cards/MainCard';
import {  Box, TextField ,Grid} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
const useStyles = makeStyles({
grid1:{
margin:500,
background:'red'
}
})
const PaymentDetail = () => {
    const classes = useStyles();
    return (
        <>
        {/* <MainCard title={'Payment Getway'}> */}
       
        <Grid container spacing={5} >
  <Grid item xs={6} md={4} >
  <Grid item xs={6} md={2} >
  <TextField fullWidth label="fullWidth" id="fullWidth" />
   <TextField fullWidth label="fullWidth" id="fullWidth" />
       </Grid>
  <TextField fullWidth label="fullWidth" id="fullWidth" />
  <TextField fullWidth label="fullWidth" id="fullWidth" />
  </Grid> 
  <Grid item xs={6} md={4}>
  <TextField fullWidth label="fullWidth" id="fullWidth" />
  </Grid> 
  </Grid>
  <Grid container spacing={5} style={{marginTop:1}}>
  <Grid item xs={6} md={4} >
  <TextField fullWidth label="fullWidth" id="fullWidth" />
  </Grid> 
  <Grid item xs={6} md={4}>
  <TextField fullWidth label="fullWidth" id="fullWidth" />
  </Grid> 
  </Grid>
        {/* </MainCard> */}
          
        </> 
    )
}

export default PaymentDetail
