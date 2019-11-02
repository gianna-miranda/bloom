import React, {useState, useEffect} from 'react'
import  UseForm  from '../../Components/useForm'
import validator from '../../Components/validate'
import Hero from './Hero'
import Sponsors from './Sponsors'
import Popup from '../../Components/Popup/Popup'
import './home.scss'


const Home = () =>{
    const [ users, setUsers ] = useState([])
    const [ bloomer, setBloomer ] = useState(false)
    const [ mentor, setMentor ] = useState(false)
    const [ popup, setPopup ] = useState(false)
    const signUp = () =>{
        console.log("submit was successful")
    }
    const { handleChange, handleSubmit, values, errors } = UseForm(signUp, validator)

    useEffect(() =>{
        fetch("/test")
            .then(res => res.json())
            .then(res => setUsers(res))
            .catch(() => console.log("was not able to find users"))
    }, [])

    const signupType = (type) =>{
        if(type === "bloomer"){
            setBloomer(true)
            setMentor(false)
        } else if (type === "mentor"){
            setBloomer(false)
            setMentor(true)
        }
    }

    let isBloomer = bloomer ? "active" : "inactive"
    let isMentor = mentor ? "active" : "inactive"

    return(
        <div>
            <Hero />
            <Sponsors />
            <Popup isOn={ popup } clicked={ () => setPopup(!popup) } header="Sign Up">
                <form id="form-signup" onSubmit={ handleSubmit } noValidate>
                    <label htmlFor="Name">First Name:</label>
                    <input type="text" name="firstName" className="input" values={ values.firstName } onChange={ handleChange } required/>
                    {errors.firstName && <p>{errors.firstName}</p>}
                    <label htmlFor="first name">Last Name:</label>
                    <input type="text" name="lastName" className="input" values={ values.lastName } onChange={ handleChange } required/>
                    {errors.lastName && <p>{errors.lastName}</p>}
                    <label htmlFor="first name">Email:</label>
                    <input type="text" name="email" className="input" values={ values.email } onChange={ handleChange } required/>
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
            </Popup>
        </div>
    )
}

export default Home