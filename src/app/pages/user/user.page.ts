import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/classes/persona.model';// se importa la clase
import { Carro } from 'src/app/interfaces/carro.model';//se importa la interfaz


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: false,
})
export class UserPage implements OnInit {
  imageurl: string = 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/J7A3JSAAC5G2ZP2BJNTM53NPAA.jpg';
  nombre : string = "David Santiago";
  edad : number = 20;
  cedula : number = 1021392822;
  correo : string = "santi3mayo@gmail.com";
  telefono : number = 3173482958;

  persona: Persona;//se declara la variable de la clase persona
  carroLujo: Carro;//se declara la interface


  constructor() { }

  ngOnInit() {
    this.persona = new Persona(2, "Eider")//se construye el objeto de la clase, el this se refiere aun atributo estricto de la clase
    let persona: Persona = new Persona(2, "Stefania");
    persona.saludar();//se ejecuta la clase

    //objeto tipado de una interfaz, que cumpla con una estructura definida
    this.carroLujo = {
      id: 1,
      color: 'Rojo',
      marca: 'Ferrari'
    }
  }

}
