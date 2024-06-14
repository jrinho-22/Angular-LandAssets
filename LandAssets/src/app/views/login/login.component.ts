import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  loginForm: boolean = true
  loginData: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    protected AuthService: AuthService
  ) {
    this.loginData = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
    });
  }

  login() {
    this.AuthService.signIn(
      this.loginData.value['email'],
      this.loginData.value['password']
    )
  }

  signUp() {
    this.AuthService.signUp(this.loginData.value)
  }
}
