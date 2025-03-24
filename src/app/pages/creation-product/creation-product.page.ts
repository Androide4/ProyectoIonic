import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-creation-product',
  templateUrl: './creation-product.page.html',
  styleUrls: ['./creation-product.page.scss'],
  standalone: false
})
export class CreationProductPage implements OnInit {

    listadosProductos: Product [] = [];

  constructor() { }

  ngOnInit() {
  }

  crearProducto(product: Product) {
    this.listadosProductos.push(product);
    console.log("Lista de productos:", this.listadosProductos);
  }
  
}
