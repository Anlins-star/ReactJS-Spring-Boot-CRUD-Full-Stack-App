import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([])  

  useEffect(() => {

    EmployeeService.getEmployees().then((responce) => {
        setEmployees(responce.data);
        console.log(responce.data);
    }).catch(error =>{
        console.log(error);
    })

  }, [])


  return (
    <div className='container'>
        <h2 classname = 'text-center'> List Employees </h2>
        <table className='table table-bordered table-stripped'>
            <thead>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                        <tr key = {employee.id}>
                            <td> {employee.id} </td>
                            <td> {employee.firstName} </td>
                            <td> {employee.lastName} </td>
                            <td> {employee.emailId} </td>
                        </tr>
                    )
                }
            </tbody>

        </table>


    </div>
  )
}

export default ListEmployeeComponent