import React,{useContext}  from 'react';
import Cards from './AdminCard'
import {Grid} from '@material-ui/core';
import { gridSpacing } from 'store/constant';
import {Link} from 'react-router-dom';
import {Box} from '@material-ui/core';

// import context
import {ValidationContext} from '../Context/FormContext'

const Admin = () => {
    const {updated,activeState}  = useContext(ValidationContext)
    return (
        <>

   { activeState === 5 ? 
   <Box>

        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Link exact to='/sample-page/admin/DetailPage'>
                    <Cards style={{textDecoration: 'none'}}/>
                    </Link>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Cards/>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Cards/>
                    </Grid>
        </Grid></Grid></Grid>
        </Box>
        : 
        <Box>
            <h1>
                No User for approval
            </h1>
        </Box>
}
        </>
    )
}

export default Admin
