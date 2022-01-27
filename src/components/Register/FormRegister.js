import React from 'react';
import useForm from './useForm';
import validate from './validate';
import '../../scss/app.scss'

const FormRegister = () => {

    const {handleChange, values, handleSubmit, errors} = useForm(validate);
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <div className="form_input">
                    <label htmlFor="name" className="form_label"/>
                    <input 
                        id= "name"
                        type="text"
                        name= "name"
                        className= "input"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className='errors'>{errors.name}</span>}
                </div>

                <div className="form_input">
                    <label htmlFor="surname" className="form_label"/>
                    <input 
                        id= "surname"
                        type="text"
                        name= "surname"
                        className= "input"
                        placeholder="Surname"
                        value={values.surname}
                        onChange={handleChange}
                    />
                    {errors.surname && <span className='errors'>{errors.surname}</span>}
                </div>

                <div className="form_input">
                    <label htmlFor="email" className="form_label"/>
                    <input 
                        id= "email"
                        type="email"
                        name= "email"
                        className= "input"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className='errors'>{errors.email}</span>}
                </div>

                <div className="form_input">
                    <label htmlFor="password" className="form_label"/>
                    <input 
                        id= "password"
                        type="password"
                        name= "password"
                        className= "input"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className='errors'>{errors.password}</span>}
                </div>

                <div className="form_input">
                    <label htmlFor="confirmPassword" className="form_label"/>
                    <input 
                        id= "confirmPassword"
                        type="password"
                        name= "confirmPassword"
                        className= "input"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <span className='errors'>{errors.confirmPassword}</span>}
                </div>

                <button type="submit" className="form_input_button">
                    Sign up
                </button>
            </form>
            
        </div>
    )
}

export default FormRegister;