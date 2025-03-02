import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
  standalone: false,//colocar esta linea para evitar error del cannot get 
})
export class UserEditPage implements OnInit {
  imageurl: string = 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/J7A3JSAAC5G2ZP2BJNTM53NPAA.jpg';
  nombre : string = "David Santiago";
  fechaNacimiento : string = "2003-02-22"; 
  cedula : number = 1021392822;
  correo : string = "santi3mayo@gmail.com";
  telefono : number = 3173482958;

  constructor() { }

  ngOnInit() {
  }
  enviarDatos(){
    console.log(this.nombre);
    console.log(this.fechaNacimiento);
    console.log(this.cedula);
    console.log(this.correo);
    console.log(this.telefono);
  }
}
