import React from 'react';
import { Typography, Button, Box, CardActions, CardContent, Card, Radio, RadioGroup, FormControlLabel ,FormControl } from '@material-ui/core';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { makeStyles,  } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
    card1: {
        boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: ' 0.3s',
        marginTop: 10,
        '&:hover': {
            background: '#2e2e2e',
            color: '#fff'
        }
    }
}));
const Cards = (props) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card1}>
                <CardContent>
                    <Typography sx={{ fontSize: 30, fontWeight: 'bold' }} gutterBottom>
                        {props.Packagename}
                    </Typography>
                    <ol>
                        <li>){props.dis1}</li>
                        <li>){props.dis2}</li>
                        <li>){props.dis3}</li>
                        <li>){props.dis4}</li>
                    </ol>
                    <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} gutterBottom>
                        Packges
                    </Typography>
               
             
                        <RadioGroup aria-label="gender" defaultValue="" name="radio-buttons-group">
                           
                                 <FormControlLabel value="" control={<Radio />} label="" /> {props.Days1} - {props.Payments1}{' '}
                            
                          
                                 <FormControlLabel value="" control={<Radio />} label="" /> {props.Days2} - {props.Payments2}{' '}
                        
                          
                                 <FormControlLabel value="" control={<Radio />} label="" />
                                {props.Days3} - {props.Payments3}{' '}
                            
                        </RadioGroup>
                        <RadioGroup>
                    <FormControlLabel name="Answer" value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer" value="No" control={<Radio />} label="No" />
                </RadioGroup> 
                    
                
                </CardContent>
                <CardActions>
                    <AnimateButton>
                        <Button
                            disableElevation
                            // disabled={isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            Book
                        </Button>
                    </AnimateButton>
                </CardActions>
            </Card>
        </>
    );
};

export default Cards;
