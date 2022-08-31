import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams  } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate (); //In react-router-dom v6 useHistory() is replaced by useNavigate().
    const {id} = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId}

        //console.log(employee);
        EmployeeService.createEmployee(employee).then((responce) => {

            console.log(responce.data);
            navigate('/employees')

        }).catch(error => {
            console.log(error);
        })

    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((responce)=>{
           
            setFirstName(responce.data.firstName)
            setLastName(responce.data.lastName)
            setEmailId(responce.data.emailId)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

    const title = () => {
        if (id){
            return <h3 className='text-center'>Update Employee</h3>
        } else {
            return <h3 className='text-center'>Add Employee</h3>
        }
        
    }

    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                   
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> First Name: </label>
                                    <input 
                                        type= 'text'
                                        placeholder='Enter First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Last Name: </label>
                                    <input 
                                        type= 'text'
                                        placeholder='Enter Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Email Id: </label>
                                    <input 
                                        type= 'text'
                                        placeholder='Enter Email Id'
                                        name='emailId'
                                        className='form-control'
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)} />
                                </div>
                                <button className='btn btn-success' onClick={(e) =>saveEmployee(e)}>Save</button>
                                <Link to="/employees" className='btn btn-danger' style={{marginLeft:"10px"}}>Cancel</Link>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default CreateEmployeeComponent