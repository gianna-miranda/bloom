 import React from 'react'

const signUpPop = props =>{
    const {
        handleChange, 
        handleSubmit, 
        values, 
        errors,
        tags,
        isBloomer,
        isMentor,
        addTag,
        signupType
    } = props

    const grades = ["9th", "10th", "11th", "12th"]
    const gpa = [1,2,3,4,5]
    
    return(
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
                {tags.map((tag, i) => (<li key={tag + i}>{tag}</li>))}
            </ul>

            <label htmlFor="choose">Choose:</label>
            <div className="buttons">
                <div className={`buttons-bttn ${ isMentor }`} onClick={ () => signupType("mentor") }>Mentor</div>
                <div className={`buttons-bttn ${ isBloomer }`} onClick={ () => signupType("bloomer") }>Bloomer</div>
            </div>

            { isBloomer === "active" && 
                <>
                    <label htmlFor="gradelevel">Grade Level</label>
                    <select name="gradeLevel" value={values.gradeLevel} onChange={ handleChange } required>{grades.map(grade => <option key={grade}>{grade}</option>)}</select>
                    <label htmlFor="gpa">GPA</label>
                    <select name="gpa" onChange={ handleChange } required>{gpa.map((gpa) => <option key={gpa}>{gpa}</option>)}</select>
                </> 
            }

            <div className="submit">
                <input type="submit" value="Sign Up" className="submit-bttn"/>
            </div>
        </form>
    )
}

export default signUpPop
