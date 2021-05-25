import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmployeeComponent implements OnInit {
  maritalStatuses: any[] = ['Single', 'Married', 'Divorced'];
  idEmployee: any;
  action = 'Add';

  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfAdmission: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      civilStatus: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    const idParam = 'id';
    this.idEmployee = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if(this.idEmployee !== undefined) {
      this.action = 'Edit';
      this.isEditEmployee();
    }
  }

  saveEmployee() {
    //console.log(this.myForm);
    const employee: Employee = {
      name: this.myForm.get('name').value,
      email: this.myForm.get('email').value,
      dateOfAdmission: this.myForm.get('dateOfAdmission').value,
      phoneNumber: this.myForm.get('phoneNumber').value,
      civilStatus: this.myForm.get('civilStatus').value,
      gender: this.myForm.get('gender').value,
    };

    if(this.idEmployee !== undefined) {
      this.editEmployee(employee);
    } else {
      this.addEmployee(employee);
    }

  }

  addEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee);
    this.snackBar.open('The employee has been successfully registered', '', {
      duration: 3000
    });
    this.route.navigate(['/']);
  }

  editEmployee(employee: Employee) {
    this.employeeService.editEmployee(employee, this.idEmployee);
    this.snackBar.open('The employee has been edited successfully', '', {
      duration: 3000
    });
  }

  isEditEmployee() {
    const employee: Employee = this.employeeService.getEmployee(this.idEmployee);
    console.log(employee);
    this.myForm.patchValue({
      name: employee.name,
      email: employee.email,
      dateOfAdmission: employee.dateOfAdmission,
      phoneNumber: employee.phoneNumber,
      civilStatus: employee.civilStatus,
      gender: employee.gender,
    })
  }
}
