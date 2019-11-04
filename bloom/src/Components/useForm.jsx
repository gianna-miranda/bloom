import { useState, useEffect } from "react"

const UseForm = (callback, validate) => {
  const [ values, setValues ] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "", 
    phoneNumber: "",
    description: "",
    tag: ""
  })

  const [ errors, setErrors ] = useState({})
  const [ isSubmitting, setIsSubmitting ] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [ name ]: value
    })
  }

  const handleSubmit = event =>{
    event.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(values))
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      callback()
    }
  }, [errors])

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  }
}

export default UseForm