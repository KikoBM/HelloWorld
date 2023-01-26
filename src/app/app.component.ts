import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre = "Juanillo el Golondrina"

  public estaURL = window.location.href

  public helloUser(){
    return "Hola "+ this.nombre
  }


}
