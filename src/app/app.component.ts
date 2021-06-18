import { Component, OnInit, OnDestroy } from '@angular/core';


// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-world';
  ngOnInit(){
    console.log("Init metodo");
  }

  ngOnDestroy(){
    console.log("Destroy metodo");
  }
}
