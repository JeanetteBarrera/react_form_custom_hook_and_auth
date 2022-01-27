import React from "react";
import useForm from "./useForm";
import validate from "./validate";
import imgLogin from "../../images/imageLogin.svg"
import '../../scss/app.scss'

const FormLogin = () => {

    const { handleChange, handleSubmit, values, errors } = useForm(validate);
    return (
        <div className="login">
            <section className="box-1">
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Sign in</h2>
                    <div className="form-input">
                        <label htmlFor="email" className="form_label" />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="input"
                            placeholder="E-mail"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className='errors'>{errors.email}</span>}
                    </div>

                    <div className="form-input">
                        <label htmlFor="password" className="form_label" />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="input"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className='errors'>{errors.password}</span>}
                    </div>

                    <div className="remember">
                        <div>
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="/">Forget Password ?</a>
                    </div>

                    <button type="submit" className="button_submit">
                        Sign in
                    </button>
                </form>
                <div className='container_login_footer'>
                    <span>Or login with</span>
                    <a href="#" className="social">Facebook</a>
                    <a href="#" className="social">LinkedIn</a>
                    <a href="#" className="social">Google</a>
                </div>
            </section>
            <section className="box-2">
                <img src={imgLogin} />
            </section>
        </div>
    )
}
export default FormLogin;