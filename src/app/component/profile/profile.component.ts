import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  genders = ['male', 'female'];
  name: string = '';
  phnum: string = '';
  email: string = '';
  gender: string = '';

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngOnInit(): void {
  }

}
