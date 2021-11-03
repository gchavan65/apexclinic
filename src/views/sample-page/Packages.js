import React,{useContext,useState} from 'react';

//  context
import {ValidationContext} from '../sample-page/Context/FormContext'
import './Package.css'
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { Typography, Button, Box, CardActions, CardContent, Card, Radio, RadioGroup, FormControlLabel ,FormControl} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import clsx from 'clsx'
// import packages
import AnimateButton from 'ui-component/extended/AnimateButton';

 const useStyles = makeStyles((theme) => ({
   
 }));



const Packages = () => {
    const [style, setStyle] = useState("cont");
    const changeStyle = () => {
        console.log("you just clicked");
        setStyle("cont2");
        setStyles("count");
      };
      const [styles, setStyles] = useState("cont");

      const changeStyles = () => {
          console.log("you just clicked");
          setStyles("cont2");
          setStyle("cont");
        };
 const {pack, handleNext,handleBack,activeState}  = useContext(ValidationContext)

    const classes = useStyles();
    return (
        <>
            <MainCard title="Packages">
               
                    <Box styles={{ width: '50%' }}>
                    
                       
                        <Card className={styles}>
                            <CardContent>
                                <Typography sx={{ fontSize: 30, fontWeight: 'bold' }} gutterBottom>
                                Basic Package
                                </Typography>
                                <ol>
                                    <li>)Pulse Oxymeter (SPO2 Pulse Rate)</li>
                                    <li>)Digital TharmaMeter</li>
                                    <li>)Digital BP TharmaMeter</li>
                                    <li>)N95 Mask</li>
                                </ol>
                                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} gutterBottom>
                                    Packges
                                </Typography>
                                    <RadioGroup>
                                <FormControlLabel name="basicpack" value="8999"  onChange={e=>pack(e)} control={<Radio />}  label="7 Days-8999/-" />
                                <FormControlLabel name="basicpack" value="10499" onChange={e=>pack(e)} control={<Radio />}  label="10 Days-10499/-" />
                                <FormControlLabel name="basicpack" value="13999" onChange={e=>pack(e)} control={<Radio />} label="14 Days-13999/-" />
                            </RadioGroup>
                            <AnimateButton >
                       <Button
                       style={{marginLeft: '10px'}}
                           size="large"
                           variant="contained"
                           color="secondary"
                          onClick={changeStyles} 
                            >
                   Select
                       </Button>
                   </AnimateButton>
                            </CardContent>
                            
                            <CardActions>
                            <Box style={{display: 'flex', flexDirection: 'row' ,marginTop:10}}>


                   

</Box>
                            </CardActions>
                        </Card>


                        <Card className={style}>
                            <CardContent>
                                <Typography sx={{ fontSize: 30, fontWeight: 'bold' }} gutterBottom>
                                Primium Package
                                </Typography>
                                <ol>
                                    <li>)Pulse Oxymeter (SPO2 Pulse Rate)</li>
                                    <li>)Digital TharmaMeter</li>
                                    <li>)Digital BP TharmaMeter</li>
                                    <li>)N95 Mask</li>
                                </ol>
                                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} gutterBottom>
                                    Packges
                                </Typography>
                           
                                    <RadioGroup>
                                    <FormControlLabel name="primiumpack" value="1099" onChange={e=>pack(e)} control={<Radio />}  label="7 Days-1099/-" />
                                <FormControlLabel name="primiumpack" value="12499" onChange={e=>pack(e)} control={<Radio />}  label="10 Days-12499/-" />
                                <FormControlLabel name="primiumpack" value="18999" onChange={e=>pack(e)} control={<Radio />} label="14 Days-18999/-" />
                            </RadioGroup> 
                                
                            <Button
                            style={{marginLeft: '10px'}}
                            size="large"
                            variant="contained"
                            color="secondary"
                           onClick={changeStyle} 
                       >
                           Select
                       </Button>
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
                    </Box>
                   
            </MainCard>
        </>
    );
};

export default Packages;
