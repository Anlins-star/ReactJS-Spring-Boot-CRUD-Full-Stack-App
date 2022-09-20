import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {

    //temporary adding hardcoded employees to array
    //copied from postman
    this.employees = [
      {
          "id": 24,
          "firstName": "1yruer22",
          "lastName": "2ytuyeuyt",
          "emailId": "333  3332132@ddddf.hh"
      },
      {
          "id": 25,
          "firstName": "545454",
          "lastName": "Last",
          "emailId": "dggd@djjdjd.ee"
      },
      {
          "id": 26,
          "firstName": "3434",
          "lastName": "343443",
          "emailId": "23wr@fssfdf.gg"
      },
      {
          "id": 37,
          "firstName": "23423",
          "lastName": "42323",
          "emailId": "fasdfa"
      }
  ];

}

}
