import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['Alexis25yo@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {}

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Exito');
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
