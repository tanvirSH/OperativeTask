import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNewApp';
  	compDelId = {
  		'1': true,
  		'2': true,
  		'3': true,
  		'4': true,
  	};
    compToggler($event) {
	    this.compDelId[$event] = !this.compDelId[$event];
	 }
}
