export default function validate(values) {
    let errors = {}

    if(!values.name.trim()) {
        errors.name = "Name is required"
    }

    if(!values.surname.trim()) {
        errors.surname = "Surname is required"
    }

    if(!values.email){
        errors.email = "Email is required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if(!values.password) {
        errors.password = "Password is required"
    }else if(values.password.length < 6) {
        errors.password = "Password require more of 6 characters"
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = "Password is required"
    }
    else if(values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password do not match"
    }

    return errors;
}