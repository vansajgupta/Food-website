import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstproject';
  user =" developer";
  imgSrc="../assets/burger.jpg"
 //myImage:string="../assets/newback.jpg"
  btnClicked(){
    alert("button clicked")
  }
}
