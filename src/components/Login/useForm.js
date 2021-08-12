import React, {useState} from "react";
import validate from "./validate";
import {Redirect} from 'react-router-dom';
import {setToken, setCurrentUser, getToken, getUsername, deleteToken} from '../Helpers/auth-helpers'
import axios from "axios";


const useForm = validate => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values))

        //alert(`${e.target.email.value}, ${e.target.password.value}`)
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        //aca se supone se agrega el auth
        axios.post('http://localhost:3001/api/account/login', data)
            .then(res => {
                if(res.data.status === "ok"){
                    //localStorage.setItem("token", res.data.result.token);
                    setToken(res.data.token)
                    setCurrentUser(res.data.name)
                    return(<Redirect to="/" />)

                }else {
                    alert("Email or Password is invalid ")
                }
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                alert("ERROR DE CONEXION")
            })
    }
    return{handleChange,handleSubmit, values, errors}
}
export default useForm;