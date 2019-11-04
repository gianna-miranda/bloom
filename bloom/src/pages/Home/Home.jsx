import React, {useState, useEffect} from 'react'
import UseForm  from '../../Components/useForm'
import validator from '../../Components/validate'
import Hero from './Hero'
import Sponsors from './Sponsors'
import Rewards from './Rewards'
import SignUp from '../../Components/SignUp/SignUp'
import Popup from '../../Components/Popup/Popup'
import './home.scss'



const Home = () =>{
    const [ users, setUsers ] = useState([])
    const [ bloomer, setBloomer ] = useState(false)
    const [ mentor, setMentor ] = useState(false)
    const [ popup, setPopup ] = useState(true)

    const signupType = (type) =>{
        if(type === "bloomer"){
            setBloomer(true)
            setMentor(false)
        } else if (type === "mentor"){
            setBloomer(false)
            setMentor(true)
        }
        return type
    }

    const signUp = () =>{
        
    }

    const { handleChange, handleSubmit, values, errors } = UseForm(signUp, validator)

    useEffect(() =>{
        fetch("/test")
            .then(res => res.json())
            .then(res => setUsers(res))
            .catch(() => console.log("was not able to find users"))
    }, [])

    let isBloomer = bloomer ? "active" : "inactive"
    let isMentor = mentor ? "active" : "inactive"

    const signUpPop = () =>(
        <form id="form-signup" onSubmit={ handleSubmit } noValidate>
            <label htmlFor="Name">First Name:</label>
            <input type="text" name="firstName" className="input" values={ values.firstName } onChange={ handleChange } required/>
            {errors.firstName && <p>{errors.firstName}</p>}
            <label htmlFor="last name">Last Name:</label>
            <input type="text" name="lastName" className="input" values={ values.lastName } onChange={ handleChange } required/>
            {errors.lastName && <p>{errors.lastName}</p>}
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" className="input" values={ values.email } onChange={ handleChange } required/>
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" className="input" values={ values.password } onChange={ handleChange } required/>
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor="choose">Choose:</label>
            <div className="buttons">
                <div className={`buttons-bttn ${ isMentor }`} onClick={ () => signupType("mentor") }>Mentor</div>
                <div className={`buttons-bttn ${ isBloomer }`} onClick={ () => signupType("bloomer") }>Bloomer</div>
            </div>
            <div className="submit">
                <input type="submit" value="Sign Up" className="submit-bttn"/>
            </div>
        </form>
    )

    return(
        <div>
            <Hero />
            <Sponsors />
            <Rewards />
            <SignUp signUp={() => setPopup(true)}/>
            <Popup isOn={ popup } clicked={ () => setPopup(!popup) } header="Sign Up">
                {signUpPop()}
            </Popup>
        </div>
    )
}

export default Home