import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  name = new FormControl('');
  email = new FormControl('');

}
