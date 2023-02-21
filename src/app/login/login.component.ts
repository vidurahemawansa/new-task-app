import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';
import {emailValidator} from '../shared//email-validator.directive';

import { AuthService } from '@auth0/auth0-angular';

interface loginDetails {
  user: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;
  taskAdmin: loginDetails;
  

  constructor(
    private fb: FormBuilder,
    public auth: AuthService
    ) 
    {
    this.taskAdmin = {} as loginDetails;
   }

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   user: ['', [Validators.required, emailValidator()]],
    //   password: ['', Validators.required]
    // });
  }

  get user() {
    return this.loginForm.get('user')!;
  }

  get password() {
    return this.loginForm.get('user')!;
  }

  onSubmit() {

  }

  // public validate(): void {
  //   if (this.loginForm.invalid) {
  //     for (const control of Object.keys(this.loginForm.controls)) {
  //       this.loginForm.controls[control].markAsTouched();
  //     }
  //     return;
  //   }

  //   this.taskAdmin = this.loginForm.value;
  // }

  
}
