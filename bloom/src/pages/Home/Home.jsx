import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UseForm  from '../../Components/useForm'
import validator from '../../Components/validate'
import Hero from './Hero'
import Sponsors from './Sponsors'
import Rewards from './Rewards'
import SignUp from '../../Components/SignUp/SignUp'
import Popup from '../../Components/Popup/Popup'
import './home.scss'



const Home = () =>{
    const [ tags, setTags ] = useState([])
    const [ bloomer, setBloomer ] = useState(false)
    const [ mentor, setMentor ] = useState(false)
    const [ popupSignUp, setPopupSignUp ] = useState(false)
    const [ popupLogin, setPopupLogin ] = useState(false)
    const [ isSignUp, setIsSignUp ] = useState(Boolean)

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

    const signUp = () =>{
        setIsSignUp(true)
        if(isMentor === "active"){
            values.tags = tags
            console.log(values)
            axios.post('/mentor/add', values)
        } else if(isBloomer === "active"){

        } else{
            console.log("Are you a Mentor or Bloomer")
        }
    }
    
    const login = () =>{
        console.log("login submition")
    }

    let submit = isSignUp ? signUp : login

    const { handleChange, handleSubmit, values, errors } = UseForm(submit, validator)

    const addTag = () =>{
        setTags([...tags, values.tag])
    }

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
            {errors.password && <p>{errors.password}</p>}

            <label htmlFor="phone number">Phone Number:</label>
            <input type="text" name="phoneNumber" className="input" values={ values.phoneNumber } onChange={ handleChange } required/>
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}

            <label htmlFor="description">Describe Yourself</label>
            <textarea rows="5" name="description" values={ values.description } onChange={ handleChange }></textarea>
            {errors.description && <p>{errors.description}</p>}

            <label htmlFor="tags">Create a Tag:</label>
            <input type="text" name="tag" className="input" values={ values.tag } onChange={ handleChange } required/>
            <div className="add-btn" onClick={ () => addTag()}>Add</div>
            <ul>
                {tags.map(tag => (<li key={tag}>{tag}</li>))}
            </ul>
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

    const loginPop = () =>(
        <form>
            <div>
                something
            </div>
        </form>
    )

    return(
        <div>
            <Hero />
            <Sponsors />
            <Rewards />
            <SignUp signUp={() => {setPopupSignUp(true); setIsSignUp(true)}} login={() => {setPopupLogin(true); setIsSignUp(false)}}/>
            <Popup isOn={ popupSignUp } clicked={ () => {setPopupSignUp(!popupSignUp)} } header="Sign Up">
                {signUpPop()}
            </Popup>
            <Popup isOn={ popupLogin } clicked={ () => {setPopupLogin(!popupLogin); setIsSignUp(false)} } header="Login">
                {loginPop()}
            </Popup>
        </div>
    )
}

export default Home