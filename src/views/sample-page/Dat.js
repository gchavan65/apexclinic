import React,{useContext}  from 'react';
import MainCard from 'ui-component/cards/MainCard';
import {List,ListItem ,ListItemText,Button,Box,Typography} from '@material-ui/core';
import useRazorpay, { RazorpayOptions } from "react-razorpay";

// import context
import {ValidationContext} from '../sample-page/Context/FormContext'

// import packages
import AnimateButton from 'ui-component/extended/AnimateButton';

const Dat = () => {
  const {updated,handleNext,handleBack ,activeState, Upload , proUpdate,}  = useContext(ValidationContext)


  const Razorpay = useRazorpay();

  const handlePayment = async (params) => {
    // const order = await createOrder(params); //  Create order on your backend
  
    const options = {
      key: "rzp_test_hLN7pOuI6XvDT5", // Enter the Key ID generated from the Dashboard
      amount: params*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "ApexClinic",
      description: "Pakcages",
      image: "https://example.com/your_logo",
      // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "21CI",
        email: "21ciconnect@gmail.com",
        contact: "8329386658",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const rzp1 = new Razorpay(options);
  
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
  
    rzp1.open();
  };

    return (
        <>
        <MainCard title="Basic Data">
        <List>
              <ListItem>
                <ListItemText primary="FirstName" secondary="Gaurav" />  <ListItemText primary="LastName" secondary="Chavhan" />
              </ListItem>
              <ListItem> 
                <ListItemText primary="Email" secondary={updated.email} />      <ListItemText primary="Mob Number" secondary={updated.number} />  
              </ListItem>
              <ListItem> 
                <ListItemText primary="Address" secondary={updated.address} />      <ListItemText primary="Age" secondary={updated.age} />  
              </ListItem>
             
              <ListItem>
              <Box style={{textAlign:'center'}} >
              <img src={proUpdate} alt="no img" style={{width: '250px', height: '250px'}} />  
              <Typography style={{fontWeight:"bold"}}>ProfilePicture</Typography>
              </Box>
              </ListItem>
              <ListItem>
              <Box style={{textAlign:'center'}}>
              <img src={Upload} alt="no img" style={{width: '250px', height: '250px'}} />  
              <Typography style={{fontWeight:"bold"}} >Adharcard</Typography>
              </Box> 
              </ListItem>
            
              </List>
        </MainCard>
              <MainCard title="symptoms Data">
              <Box className="PatientEligibility"> 
              <List>
              <ListItem>
                <ListItemText primary="Do You Have Cought ?" secondary={updated.answer1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do You Have Cold ?" secondary={updated.answer2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Do You Have Sore Throat" secondary={updated.answer3} />
              </ListItem>
              <ListItem>
                <ListItemText primary="are You Experencing Body Aches ?" secondary={updated.answer4} />
              </ListItem>
              <ListItem>
                <ListItemText primary="are You Have Fever?" secondary={updated.answer5} />
              </ListItem>
              <ListItem>
                <ListItemText primary="are You Have difficulty to Breathing ?" secondary={updated.answer6} />
              </ListItem>
              <ListItem>
                <ListItemText primary="are You Have experience to Fatigue ?" secondary={updated.answer7} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Have u travel history during the past 14 days?" secondary={updated.answer8} />
              </ListItem>
              </List>
              </Box> :
             
                  </MainCard>   

                  <MainCard title="Payments Details">
                   
                     <List>
                    <ListItem>
                <ListItemText primary="Packages" secondary={updated.Pack} /> 
              </ListItem>
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
                       {activeState=== 7 ? 'Finished' : "Next"}
                       </Button>
                   </AnimateButton>

</Box>
                    </List> 
                   
                 
                    </MainCard>   
              
        </>
    )
}

export default Dat
