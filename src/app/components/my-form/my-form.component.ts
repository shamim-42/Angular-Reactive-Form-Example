import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  StudentDetailsForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    roll: new FormControl(''),
    address: new FormGroup({
      district: new FormControl(''),
      thana: new FormControl(''),
      mob: new FormControl('')
    }) 
  });

  onSubmit = () => {
    console.warn(this.StudentDetailsForm.value);
  }

}
