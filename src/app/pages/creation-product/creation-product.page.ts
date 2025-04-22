import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { CreatingListService } from 'src/app/services/creating-list.service';

@Component({
  selector: 'app-creation-product',
  templateUrl: './creation-product.page.html',
  styleUrls: ['./creation-product.page.scss'],
  standalone: false
})
export class CreationProductPage implements OnInit {

    listadosProductos: Product [] = [];

  constructor(private creacion: CreatingListService) { }

  ngOnInit() {
    this.creacion.guardarProducto();
    this.listadosProductos = this.creacion.mostrarProducto();
  }

  crearProducto(product: Product) {
    this.creacion.agregarProducto(product); // ✔️ Correcto
    console.log("Producto guardado:", product);
  }
  
}
