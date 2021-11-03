import React,{useContext} from 'react'
import MainCard from 'ui-component/cards/MainCard';
import {ValidationContext} from '../sample-page/Context/FormContext'

import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery,
    RadioGroup,
    Radio
} from '@material-ui/core';


// style 
import { makeStyles } from '@material-ui/styles';

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

const Doctor = () => {
    const   {updated,onValueChange} = useContext(ValidationContext)
    const classes = useStyles()
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
        <>
            <MainCard type={"Doctor"}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
            <Grid item xs={12} sm={6}>
            <TextField
                                    fullWidth
                                    label="Lience"
                                    margin="normal"
                                    name="lience"
                                    type="text"
                                   value={updated.lience}
                                   onChange={e=>onValueChange(e)}
                                    className={classes.loginInput}
                                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                                    fullWidth
                                    label="Accrediation"
                                    margin="normal"
                                    name="accerediation"
                                    type="text"
                                    value={updated.accerediation}
                                    onChange={e=>onValueChange(e)}
                                    className={classes.loginInput}
                                />
            </Grid>
            
            </Grid>
            <Grid container spacing={matchDownSM ? 0 : 2}>
            <Grid item xs={12} sm={6}>
            <TextField
                                    fullWidth
                                    label="Specalist"
                                    margin="normal"
                                    name="specalist"
                                    type="text"
                                    value={updated.specalist}
                                    onChange={e=>onValueChange(e)}
                                    className={classes.loginInput}
                                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                                    fullWidth
                                    label="Sub-Specalist"
                                    margin="normal"
                                    name="subSpecalist"
                                    type="text"
                                    value={updated.subSpecalist}
                                    onChange={e=>onValueChange(e)}
                                    className={classes.loginInput}
                                />
            </Grid>
            
            </Grid>
            <Grid container spacing={matchDownSM ? 0 : 2}>
            <Grid item xs={12} sm={6}>
            <TextField
                                    fullWidth
                                    label="Education"
                                    margin="normal"
                                    name="education"
                                    type="text"
                                    value={updated.education}
                                    onChange={e=>onValueChange(e)}
                                    className={classes.loginInput}
                                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                                    fullWidth
                                    label="Year Of Exprenece"
                                    margin="normal"
                                    name="experience"
                                    type="Number"
                                    value={updated.experience}
                                    onChange={e=>onValueChange(e)}
                                    className={classes.loginInput}
                                />
            </Grid>
            
            </Grid>
            
            </MainCard>
        </>
    )
}

export default Doctor