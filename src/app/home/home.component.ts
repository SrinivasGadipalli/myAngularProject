import { Component } from '@angular/core';
import { user } from '../UserList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // userDetails: user[] = [];
  counter: number = 0;
  decrease() {
    this.counter -= 1;
  }

  increase() {
    this.counter += 1;
  }

  name: string = '';
  changeInput(e: any) {
    this.name = e.target.value;
  }

  city = 'Hyderabad';

  updateCity() {
    this.city = 'Mumbai';
  }

  topPadding: number | undefined = 400;
  leftPadding: number | undefined = 400;
  myStyle: object | undefined = {};

  timer = setInterval(() => {
    this.topPadding = Math.ceil(Math.random() * 500);
    this.leftPadding = Math.ceil(Math.random() * 500);
    this.myStyle = {
      position: 'absolute',
      top: this.topPadding + 'px',
      left: this.leftPadding + 'px',
    };
  }, 1000);

  show: boolean = true;
}
