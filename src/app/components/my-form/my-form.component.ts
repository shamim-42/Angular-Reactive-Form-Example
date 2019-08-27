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
    roll: new FormControl(0)    
  });

  onSubmit = () => {
    console.warn(this.StudentDetailsForm.value)
  }

}
