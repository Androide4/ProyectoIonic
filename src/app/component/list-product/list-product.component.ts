import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';//se importa la interfaz

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
  standalone: false,
})
export class ListProductComponent  implements OnInit {
  @Input() productos: Product[] = [];
  @Input() botonCompra: boolean = true;
  @Output() agregar = new EventEmitter<Product>();
  @Output() eliminar = new EventEmitter<number>();
  mostrarLista: boolean = true;

  constructor() { }

  ngOnInit() {}

}
