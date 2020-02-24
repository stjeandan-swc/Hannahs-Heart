import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {

  employeesList = [
    {
      fistName: 'Henry',
      lastName: 'Flounder',
      specialty: 'Counsellor',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
