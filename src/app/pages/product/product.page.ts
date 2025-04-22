import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';//se importa la interfaz
import { CreatingListService } from 'src/app/services/creating-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: false,//colocar esta linea para evitar error del cannot get 
})
export class ProductPage implements OnInit {


  listadosProductos: Product [] = []; //declara e inicializa una lista de objetos (02/03/2025)


  constructor(private creacion: CreatingListService) { }

  //asignar valor a los atributos de la interfaz en la lista de objetos que inicialice(02/03/2025)
  //muestra los productos que se llaman desde el servicio (3/4/2025)
  ngOnInit() {
    this.creacion.guardarProducto();
    this.listadosProductos = this.creacion.mostrarProducto();
  }

}
