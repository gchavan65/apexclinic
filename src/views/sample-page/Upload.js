import React,{useContext , useState} from 'react';
import MainCard from 'ui-component/cards/MainCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import {Typography,Button,Input,Box} from '@material-ui/core';
import SubCard from 'ui-component/cards/SubCard';
import { makeStyles, useTheme } from '@material-ui/styles';
//  context
import {ValidationContext} from '../sample-page/Context/FormContext'
import Files from 'react-files'
const useStyles = makeStyles({
subcard:{
  marginTop: 10,
    '&:hover': {
        borderColor: 'black',
        // color: '#fff'
     },
     preview:{
       width: '100%',
       height: '500px',
       background:'red',
       display:'flex',
       alignItems: 'center',
       justifyContent: 'center'
     }
}
})
const Upload = () => {
  const  {   handleChanged, handleChange, activeState, handleNext , handleBack,  Upload ,Adhar, proUpdate,Profile,} = useContext(ValidationContext)
  const classes = useStyles()

  // const [Profile,setProfile]=useState('')
  // const [proUpdate, setproUpdate]=useState('')

  // const handleChange = (event)=>{
  //     const setlectFile=(event.target.files[0])
  //     setProfile(setlectFile)
  //     const filepreview = URL.createObjectURL(setlectFile)
  //     console.log(filepreview)
  //     setproUpdate(filepreview)
  // }
  //   const [Adhar,setAdhar]=useState('')
  // const [Upload, setUpload]=useState('')

  // const handleChanged = (event)=>{
  //     const setlectFile=(event.target.files[0])
  //     setAdhar(setlectFile)
  //     const filepreview = URL.createObjectURL(setlectFile)
  //     console.log(filepreview)
  //     setUpload(filepreview)
  // }

  
    return (
        <>
         <MainCard title="Documents Uplaod" className={classes.subcard}>
       


<SubCard title="Upload Profile" className={classes.subcard}>
<form>
            {Profile && <img src={proUpdate} alt="no img" style={{width: '250px', height: '250px'}} />}
            <label htmlFor="contained-button-file">
  <Input accept="image/*" id="contained-button-file" style={{display: 'none'}} onChange={e=>handleChange(e)}  multiple type="file" />
  <Button variant="contained" component="span">
  {proUpdate? 'Change':"Upload"}
  </Button>
</label>
 </form>
</SubCard> 
       <SubCard title="Upload AdharCard" className={classes.subcard}>
       {Adhar && <img src={Upload} alt="no img" style={{width: '250px', height: '250px'}} />}
       <form>
       <label  >        
  <Input accept="image/*" id="contained-button-file" style={{display: 'none'}} onChange={e=>handleChanged(e)}  multiple type="file" />
  <Button variant="contained" component="span">
  {Upload? 'Change':"Upload"}
  </Button>
</label>

       </form>
      
    
 
       </SubCard>
     
          
          
             
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
              </MainCard>  
         
        </>
    )
}

export default Upload
