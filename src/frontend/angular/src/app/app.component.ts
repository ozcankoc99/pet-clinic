import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-pet-clinic';
  constructor() {
    console.log(
      '🚀 ~ file: app.component.ts ~ line 12 ~ AppComponent ~ constructor ~ 1'
    );
  }
}
