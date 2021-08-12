import React,{useState, useEffect} from 'react';
import validate from './validate';

const useForm = validate => {
    const [values, setValues] = useState ({
        
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: ''

    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })    
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values))
        
    }

    return{handleChange, values, handleSubmit, errors}
}
export default useForm;