import React,{useState, useEffect} from 'react';
import validate from './validate';
import axios from 'axios'

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

        const data = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        axios.post('http://localhost:3001/api/account/register', data)
            .then(res => {
                if(res.data.status === "ok") {
                    alert("TE REGISTRASTE CON EXITO")
                }
            })
            .catch(error => {
                alert("NO SE PUDO CONECTAR A LA API")
            })
        
    }

    return{handleChange, values, handleSubmit, errors}
}
export default useForm;