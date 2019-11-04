import React from 'react';
import { numberLiteralTypeAnnotation } from '@babel/types';

class Students extends React.Component {
    state = {
        students: [],
        firstName: '',
        lastName: '',
        gradeLevel: number,
        gpa: number,
        rating: number,
        email: '',
        phoneNumber: '',
        qualified: boolean,
        description: '',
        tag: [''],
        error: false
    }

 componentDidMount(){
    fetch('/students')
    //parses the output to JSON, returns promise
        .then(res => res.json())
        .then((data) => {
        this.setState({ students: data })
        })
        .catch(err => {
        console.log(err)
        this.setState({ err })
        })
    }

    render(){
        return(
            students.map(student => (
                <div>
                    <p>{student.firstName}{student.lastName}</p>
                    <p>{student.gradeLevel}</p>
                    <p>{student.gpa}</p>
                    <p>{student.rating}</p>
                    <p>{student.email}</p>
                    <p>{student.phoneNumber}</p>
                    <p>{student.qualified}</p>
                    <p>{student.description}</p>
                    <p>{student.tag}</p>
                </div>
            ))
        )
    }
}

    export default Students;