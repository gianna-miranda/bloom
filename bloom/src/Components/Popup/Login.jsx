import React from 'react'

const Login = props =>{
    const {
        handleChange, 
        handleSubmit, 
        values, 
        errors,
        isBloomer,
        isMentor,
        signupType
    } = props
    
    values.firstName = "default"
    values.lastName = "default"
    values.phoneNumber = "000000000"
    return(
        <form id="form-signup" onSubmit={ handleSubmit } noValidate>
            <label htmlFor="Name">Email:</label>
            <input type="text" name="email" className="input" values={ values.email } onChange={ handleChange } required/>
            {errors.email && <p>{errors.email}</p>}

            <label htmlFor="last name">Password:</label>
            <input type="text" name="password" className="input" values={ values.password } onChange={ handleChange } required/>
            {errors.password && <p>{errors.password}</p>}

            <div className="buttons">
                <div className={`buttons-bttn ${ isMentor }`} onClick={ () => signupType("mentor") }>Mentor</div>
                <div className={`buttons-bttn ${ isBloomer }`} onClick={ () => signupType("bloomer") }>Bloomer</div>
            </div>

            <div style={{display: "none"}}>
                <label htmlFor="phone number">Phone Number:</label>
                <input type="text" name="phoneNumber" className="input" values={ values.phoneNumber } onChange={ handleChange } required/>
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </div>

            <div className="submit">
                <input type="submit" value="Login" className="submit-bttn"/>
            </div>
        </form>
    )
}

export default Login