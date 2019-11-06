import React, {useState} from 'react'
import axios from 'axios'
import UseForm  from '../../Components/useForm'
import validator from '../../Components/validate'
import Hero from './Hero'
import Sponsors from './Sponsors'
import Rewards from './Rewards'
import SignUp from '../../Components/SignUp/SignUp'
import Popup from '../../Components/Popup/Popup'
import SignPopUp from '../../Components/Popup/SignUp'
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
        if(isMentor === "active"){
            values.tag = tags
            axios.post('/mentor/add', values)
            setPopupSignUp(false)
            alert("We will being contact you soon to find out if you are eligible for to be a mentor.")
        } else if(isBloomer === "active"){
            values.tag = tags
            axios.post('/student/add', values)
            setPopupSignUp(false)
        } else{
            console.log("Are you a Mentor or Bloomer")
        }
    }
    
    const login = () =>{
        console.log("login submition")
    }

    let submit = isSignUp ? signUp : login

    const { handleChange, handleSubmit, values, errors } = UseForm(submit, validator)

    const loginPop = () =>(
        <form>
            <div>
                something
            </div>
        </form>
    )

    const addTag = () =>{
        setTags([...tags, values.tag])
    }

    return(
        <div>
            <Hero />
            <Sponsors />
            <Rewards />
            <SignUp signUp={() => {setPopupSignUp(true); setIsSignUp(true)}} login={() => {setPopupLogin(true); setIsSignUp(false)}}/>
            <Popup isOn={ popupSignUp } clicked={ () => {setPopupSignUp(!popupSignUp)} } header="Sign Up">
                <SignPopUp
                    handleChange={ handleChange }
                    handleSubmit={handleSubmit}
                    values={values}
                    errors={errors}
                    tags={tags}
                    addTag={addTag}
                    isBloomer={isBloomer}
                    isMentor={isMentor}
                    signupType={signupType}
                />
            </Popup>
            <Popup isOn={ popupLogin } clicked={ () => {setPopupLogin(!popupLogin); setIsSignUp(false)} } header="Login">
                {loginPop()}
            </Popup>
        </div>
    )
}

export default Home