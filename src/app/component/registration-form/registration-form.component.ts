import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.model';//se importa la interfaz

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  standalone: false,
})
export class RegistrationFormComponent  implements OnInit {
    @Input() productos: Product[] = [];
    @Output() messageEvent = new EventEmitter<Product>();

    categories: string[] = ['Electrónica', 'Ropa', 'Hogar', 'Juguetes'];

    productForm: FormGroup = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(''),
      price: new FormControl(null),
      description: new FormControl(''),
      category: new FormControl(''),
      image: new FormControl(''),
      ratingRate: new FormControl(null),
      ratingCount: new FormControl(null),
    });

  ngOnInit() {}

  guardarProducto() {
    this.messageEvent.emit(this.productForm.value);
    alert(" Producto guardado ");
    this.productForm.reset();
  }

}
