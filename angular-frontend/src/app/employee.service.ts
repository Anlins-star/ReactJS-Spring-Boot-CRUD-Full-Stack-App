import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable <Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable <Object>{ //if do not know responce return <any> or <Object>
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }
    
  getEmployeeById(id: number): Observable <Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }
    
  updateEmployee(employee: Employee): Observable <Object>{ //if do not know responce return <any> or <Object>
    return this.httpClient.put(`${this.baseUrl}/${employee.id}`, employee);
  }
    
  deleteEmployee(id: number): Observable <Object>{ //if do not know responce return <any> or <Object>
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
