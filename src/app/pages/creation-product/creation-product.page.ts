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

  listadosProductos: Product[] = [];

  constructor(private creacion: CreatingListService) {}

  ngOnInit() {

  }

  crearProducto(product: Product) {
    if (!product.title || !product.price) {
      alert('Título y precio son obligatorios');
      return;
    }

    this.creacion.postProducto(product).subscribe(nuevo => {
      console.log('Producto agregado y persistente en esta sesión', nuevo);
    });
  }
}