import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
 <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
 </div>
 `
})

//other can use this class
export class AppComponent {
  title = 'Angular: Getting Started';
}
