import React from "react";
import useForm from "./useForm";
import validate from "./validate";

const FormLogin = () => {

    const {handleChange, handleSubmit, values, errors} = useForm(validate);
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <div className="form-input">
                    <label htmlFor="email" className="form_label" />
                    <input 
                        id= "email"
                        type= "email"
                        name= "email"
                        className= "input"
                        placeholder= "E-mail"
                        value= {values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>

                <div className="form-input">
                    <label htmlFor="password" className="form_label" />
                    <input 
                        id= "password"
                        type= "password"
                        name= "password"
                        className= "input"
                        placeholder= "Password"
                        value= {values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>

                <button type="submit" className="button_submit">
                    Sign in
                </button>
            </form>
        </div>
    )
}
export default FormLogin;