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
    this.creacion.cargarApiHttp().subscribe(() => {
      this.listadosProductos = this.creacion.obtenerProductos();
    });
  }

  crearProducto(product: Product) {
    this.creacion.postProducto(product).subscribe((nuevoProducto) => {
      console.log("Producto insertado y cargado:", nuevoProducto);
      this.listadosProductos = this.creacion.obtenerProductos();
    });
  }
}