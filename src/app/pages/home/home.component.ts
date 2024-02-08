import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  //propiedades
  nombre:string = 'Oscar';
  apellido:string = 'Ramirez';
  calificacion:number =10;
  encendido:boolean = true;

  personas:string[] = ["Juan", "Pedro", "Luisa", "Marta"];

  constructor(){}

  //método que cambia el valor de algunas propiedades
  cambiarValores(){
    this.nombre = "Pedro";
    this.calificacion = 6;
    this.encendido = false;
  }
}
