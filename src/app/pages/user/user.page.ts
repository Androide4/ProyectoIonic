import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit() {
  }

}
