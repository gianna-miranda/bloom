import React from 'react'
import './signUp.scss'

const SignUp = (props) =>(
    <>
        <div id="loginbtn" onClick={ props.clicked }><p>Login</p></div>
        <div id="signUpbtn" onClick={ props.signUp }><p>Sign Up</p></div>
    </>
)

export default SignUp