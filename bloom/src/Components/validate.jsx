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
    if(!values.password){
        errors.password = "Please enter a password"
    }
    if(!values.phoneNumber){
        errors.phoneNumber = "Please provide a number we can contact"
    } else if(!/^\d+$/.test(values.phoneNumber)){
        errors.phoneNumber = "Phone number was invalid"
    }
    return errors
}