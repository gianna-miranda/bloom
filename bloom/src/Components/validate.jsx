import validate from 'validator'

export default function validation(values){
    let errors = {};
    if(!values.firstName){
        errors.firstName = "Please enter your first name"
    } 
    if(!values.lastName){
        errors.lastName = "Please enter your last name"
    }
    if(!values.email){
        errors.email = "Please enter your email"
    } else if(!validate.isEmail(values.email)){
        errors.email = "email entered was invalid"
    }
    return errors
}