import { useState, createContext } from 'react';
import * as yup from 'yup';
export const ValidationContext = createContext();

const ValidationContextProvider = (props) => {
    const getStep = () => {
        return ['Details', 'symptoms', 'Documents', 'Package', 'AllData', 'Status'];
    };
    // hooks for btn
    const [activeState, setActiveState] = useState(0);
    const steps = getStep();
    const handleNext = (event) => {
        setActiveState(activeState + 1);
        event.preventDefault()
    };
    const handleBack = () => {
        setActiveState(activeState - 1);
    };

    const [updated, setUpdates] = useState({
        // Patients
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
        answer6: '',
        answer7: '',
        answer8: '',
        answer9: '',
        answer10: '',
        answer11: '',
        Pack: '',
        uploadprofilepicture: '',
        uploadAdhar: '',
        Payments: '',

        // signup form
        email: '',
        fname: '',
        lname: '',
        ChangeGender: '',
        number: '',
        adress: '',
        age: '',

        // doctor form
        lience: '',
        accerediation: '',
        specalist: '',
        subSpecalist: '',
        education: '',
        experience: ''
    });

    const ChangeGender = (event) => {
        if (event.target.name == 'ChangeGender') {
            updated.ChangeGender = event.target.value;
        }
    };

    const pack = (event) => {
        if (event.target.name == 'basicpack') {
            updated.Pack = event.target.value;
        } else if (event.target.name == 'primiumpack') {
            updated.Pack = event.target.value;
        }
    };

    const survey = (event) => {
        if (event.target.name == 'Answer1') {
            updated.answer1 = event.target.value;
        } else if (event.target.name == 'Answer2') {
            updated.answer2 = event.target.value;
        } else if (event.target.name == 'Answer3') {
            updated.answer3 = event.target.value;
        } else if (event.target.name == 'Answer4') {
            updated.answer4 = event.target.value;
        } else if (event.target.name == 'Answer5') {
            updated.answer5 = event.target.value;
        } else if (event.target.name == 'Answer6') {
            updated.answer6 = event.target.value;
        } else if (event.target.name == 'Answer7') {
            updated.answer7 = event.target.value;
        } else if (event.target.name == 'Answer8') {
            updated.answer8 = event.target.value;
        } else if (event.target.name == 'Answer9') {
            updated.answer9 = event.target.value;
        } else if (event.target.name == 'Answer10') {
            updated.answer10 = event.target.value;
        } else if (event.target.name == 'Answer11') {
            updated.answer11 = event.target.value;
        }
    };

    const onValueChange = (e) => {
        const { value, name } = e.target;
        setUpdates({
            ...updated,
            [name]: value
        });
        console.log(`${name} ${value}`);
    };

    const formSubmit = (event) => {
        event.preventDefault();
    };

    // upload start

    const [Profile,setProfile]=useState('')
    const [proUpdate, setproUpdate]=useState('')
  
    const handleChange = (event)=>{
        const setlectFile=(event.target.files[0])
        setProfile(setlectFile)
        const filepreview = URL.createObjectURL(setlectFile)
        console.log(filepreview)
        setproUpdate(filepreview)
    }
      const [Adhar,setAdhar]=useState('')
    const [Upload, setUpload]=useState('')
  
    const handleChanged = (event)=>{
        const setlectFile=(event.target.files[0])
        setAdhar(setlectFile)
        const filepreview = URL.createObjectURL(setlectFile)
        console.log(filepreview)
        setUpload(filepreview)
    }
    // upload end

    const state = {
        Upload ,Adhar,
        proUpdate,
        Profile,
        updated,
        onValueChange,
        formSubmit,
        survey,
        pack,
        activeState,
        steps,
        handleNext,
        handleBack,
        ChangeGender,
        handleChanged,
        handleChange
    };

    return <ValidationContext.Provider value={state}>{props.children}</ValidationContext.Provider>;
};
export default ValidationContextProvider;
