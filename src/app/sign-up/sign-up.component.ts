import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUp: any = [];
  showloginSignUpPage: boolean = true;
  constructor(private route: Router) {}

  signUpValue(data: object) {
    console.log(data);
    this.route.navigate(['app-home'])
  }

  loginValue(data: object) {
    console.log(data);
    this.route.navigate(['app-home'])
  }

  toggleSignLoginPage() {
    this.showloginSignUpPage = !this.showloginSignUpPage
  }

}
