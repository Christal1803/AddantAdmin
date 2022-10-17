import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  user: IUser;

  constructor() {
    this.user = {} as IUser;
}

  ngOnInit(): void {
    this.login = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
      ]),
      
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }

  get name() {
    return this.login.get('name')!;
  }

  get password() {
    return this.login.get('password')!;
  }

  public validate(): void {
    if (this.login.invalid) {
      for (const control of Object.keys(this.login.controls)) {
        this.login.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.login.value;

    console.info('Name:', this.user.name);
    console.info('Password:', this.user.password);
  }

}
