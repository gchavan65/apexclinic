import React,{useContext} from 'react';

// material-ui
import { Typography,Radio, RadioGroup, FormControlLabel,FormControl, Card, CardContent,CardActions,Button,Box } from '@material-ui/core';
 import { makeStyles } from '@material-ui/styles';

//  context
import {ValidationContext} from '../sample-page/Context/FormContext'

// animation
import AnimateButton from 'ui-component/extended/AnimateButton';
import * as Yup from 'yup';
const useStyles = makeStyles((theme) => ({
    card1: {
        width: '100%',
        boxShadow: ' 0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: ' 0.3s',
        marginTop: 10,
        // '&:hover': {
        //     background: '#2e2e2e',
        //     color: '#fff'
        // }
    }
}));




//= =============================|| SAMPLE PAGE ||==============================//

const SamplePage = () =>{
    const   {survey , activeState, handleNext , handleBack} = useContext(ValidationContext)
    const classes = useStyles();  
    return(
        <>
    <FormControl  >    <Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>Do You Have Cought ?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer1" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer1" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>Do You Have Cold ?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer2" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer2" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>Do You Have Sore Throat ?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer3" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer3" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>are You Experencing Body Aches ?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer4" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer4" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>are You Have Headache?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer5" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer5" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>are You Have Fever?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer6" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer6" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>are You Have difficulty to Breathing ?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer7" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer7" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>are You Have experience to Fatigue ?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer8" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer8" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>Have u travel history during the past 14 days?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer9" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer9" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>Have u travel history Covid Infected Area?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer10" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer10" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>
<Card className={classes.card1}>
    <CardContent>
    <Typography  style={{ fontWeight: 'bold', margintTop: 5 }}>Do you have direct contact or is tacking care of postive COVID-19 Patient?</Typography>
            
                <RadioGroup>
                    <FormControlLabel name="Answer11" onChange={e=>survey(e)} value="Yes" control={<Radio />}  label="Yes" />
                    <FormControlLabel name="Answer11" onChange={e=>survey(e)} value="No" control={<Radio />} label="No" />
                </RadioGroup> 
    </CardContent>
    <CardActions>
    </CardActions>
</Card>


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
                            onClick={handleNext}  >
                        {activeState=== 4 ? 'Finished' : "Next"}
                        </Button>
                    </AnimateButton>

</Box>
</FormControl>
    </>
)};

export default SamplePage;
