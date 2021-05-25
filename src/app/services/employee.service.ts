import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  listEmployee: Employee[] = [
    {
      name: 'Lucas Martinez', email: 'lmartinez@gmail.com', phoneNumber: 3512335522,
      gender: 'Male', dateOfAdmission: new Date('2019-03-10'), civilStatus: 'Single'
    },
    {
      name: 'Rodrigo Aliaga', email: 'raliaga@gmail.com', phoneNumber: 3512335522,
      gender: 'Male', dateOfAdmission: new Date('2019-05-25'), civilStatus: 'Divorced'
    },
    {
      name: 'Maria Funes', email: 'mfunes@gmail.com', phoneNumber: 3512335522,
      gender: 'Female', dateOfAdmission: new Date('2020-04-27'), civilStatus: 'Married'
    },
    {
      name: 'Lucrecia Juarez', email: 'ljuarez@gmail.com', phoneNumber: 3512335522,
      gender: 'Female', dateOfAdmission: new Date('2020-07-25'), civilStatus: 'Single'
    },
    {
      name: 'Federico Gonzalez', email: 'fgonzalez@gmail.com', phoneNumber: 3512335522,
      gender: 'Male', dateOfAdmission: new Date('2020-02-31'), civilStatus: 'Married'
    },
    {
      name: 'Estefania Schutz', email: 'eshutz@gmail.com', phoneNumber: 3512335522,
      gender: 'Female', dateOfAdmission: new Date('2020-01-31'), civilStatus: 'Single'
    },
    {
      name: 'Maria Belen Arzu', email: 'mbarzu@gmail.com', phoneNumber: 3512335522,
      gender: 'Female', dateOfAdmission: new Date('2020-01-31'), civilStatus: 'Single'
    },

  ]

  constructor() { }

  getEmployees() {
    return this.listEmployee.slice();
  }

  deleteEmployee(index: number) {
    this.listEmployee.splice(index, 1);
  }

  addEmployee(employee: Employee) {
    this.listEmployee.unshift(employee);
  }

  getEmployee(index: number) {
    return this.listEmployee[index];
  }

  editEmployee(employee: Employee, idEmployee: number) {
    this.listEmployee[idEmployee].name = employee.name;
    this.listEmployee[idEmployee].email = employee.email;
    this.listEmployee[idEmployee].dateOfAdmission = employee.dateOfAdmission;
    this.listEmployee[idEmployee].phoneNumber = employee.phoneNumber;
    this.listEmployee[idEmployee].civilStatus = employee.civilStatus;
    this.listEmployee[idEmployee].gender = employee.gender;
  }
}
