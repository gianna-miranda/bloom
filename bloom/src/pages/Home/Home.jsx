import React, {useState, useEffect} from 'react'
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
        setIsSignUp(true)
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

    const addTag = () =>{
        setTags([...tags, values.tag])
    }

    const grades = ["9th", "10th", "11th", "12th"]
    const gpa = [1,2,3,4,5]

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
                <SignPopUp
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    values={values}
                    errors={errors}
                    tags={tags}
                    isBloomer={isBloomer}
                    isMentor={isMentor}
                    grades={grades}
                    gpa={gpa}
                    addTag={addTag}
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