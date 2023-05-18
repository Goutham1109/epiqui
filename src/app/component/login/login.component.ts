import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup;

  form = new FormGroup({
    pwd: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(  private fb: FormBuilder    ) { }

  ngOnInit(): void {
  this.loginForm = this.fb.group({
    pwd: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  }

  submit() {
    console.table(this.loginForm.value);
  }

}
