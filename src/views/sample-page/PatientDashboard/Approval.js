import React,{useContext}  from 'react';
import {Link} from 'react-router-dom';
// material-ui
import { makeStyles } from '@material-ui/styles';
import {  Grid, Typography,ListItem,ListItemText} from '@material-ui/core';

// import 
import MainCard from 'ui-component/cards/MainCard';

// context
import {Approve} from '../Context/ApprovalConetx'

// style constant
const useStyles = makeStyles((theme) => ({

    content: {
        padding: '20px !important'
    },
    avatar: {
        ...theme.typography.commonAvatar,
        ...theme.typography.largeAvatar,
        backgroundColor: theme.palette.secondary[800],
        marginTop: '8px'
    },
    avatarRight: {
        ...theme.typography.commonAvatar,
        ...theme.typography.mediumAvatar,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.secondary[200],
        zIndex: 1
    },
    cardHeading: {
        fontSize: '2.125rem',
        fontWeight: 500,
        marginRight: '8px',
        marginTop: '14px',
        marginBottom: '6px',
        color:'#4527A0',
      textAlign: 'center'
    },
    subHeading: {
        fontSize: '1rem',
        fontWeight: 500,
        color: theme.palette.secondary[200]
    },
    avatarCircle: {
        cursor: 'pointer',
        ...theme.typography.smallAvatar,
        backgroundColor: theme.palette.secondary[200],
        color: theme.palette.secondary.dark
    },
    circleIcon: {
        transform: 'rotate3d(1, 1, 1, 45deg)'
    },
    menuItem: {
        marginRight: '14px',
        fontSize: '1.25rem'
    },
    Pending:{
background:'#EDE7F6',
width:'20px',
textAlign:'center',
height:'20px',
borderRadius: '10px',
fontWeight: 600,
fontSize: '1rem',

    }
}));


const Approval = () => {
    const {status}  = useContext(Approve)
 
    const classes=useStyles()
    return (
        <>
             <MainCard border={false} className={classes.card} contentClass={classes.content}>
                    <Grid container direction="column">
                        <Grid item>
                            <Grid container justifyContent="space-between">
                                    </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item >
                                    <Typography className={classes.cardHeading} >Gaurav Chavhan</Typography>
                                </Grid>
                                <Grid item>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ mb: 1.25 }}>
                    
                         <ListItem> 
                         <Link exact to="/sample-page/PatientDashboard/Vertualconsult/VirtualForm">
                <img style={{ width:50,height:50,marginLeft:20 }} src="https://www.pinclipart.com/picdir/middle/190-1905307_video-call-icon-clipart.png"  alt="No img"/> 
                </Link>
              </ListItem>
             
<ListItem>
<Typography style={{ fontWeight:"Bold"}}>Virtual Consulation</Typography>
</ListItem>
                        </Grid>
                        <Grid item sx={{ mb: 1.25 }}>
                      
                      <ListItem> 
         
           </ListItem>

                     </Grid>
                    </Grid>
                </MainCard>
        </>
    )
}

export default Approval
