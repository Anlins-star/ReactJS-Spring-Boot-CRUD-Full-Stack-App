import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

import { useNavigate } from "react-router-dom";

class CreateEmployeeComponentSub extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId:''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value})
    }
    changeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value})
    }
    /*
    or use one for all
    onChange = e => {
        const {name,value} = e.target;
        this.setState({
        [name]:value
        })
    }
    */

    saveEmployee = (e) => {
        e.preventDefault(); //using post and not updating GET in browser address bar
        let employee = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            emailId: this.state.emailId,     
        };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res=>{
            this.props.navigate('/employees');
        })
    }
    /* react-router 4
    cancel(){
        this.props.history.push('/add-employee');
    }*/

    render() {
        return (
            <div>
                <h1>Employee Form</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> First Name: </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Last Name: </label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label> Email Address: </label>
                                        <input placeholder='Email' name='emailId' className='form-control'
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <Link to="/employees">
                                        <button className='btn btn-danger' style={{marginLeft:"10px"}}>Cancel</button>
                                    </Link>
                                    {/* react-router 4 <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button> */}
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
//workaround how to run react6 for classes from react5
//https://stackoverflow.com/questions/63786452/react-navigate-router-v6-invalid-hook-call
function CreateEmployeeComponent(props) {
    let navigate = useNavigate();
    return <CreateEmployeeComponentSub {...props} navigate={navigate} />
}

export default CreateEmployeeComponent;