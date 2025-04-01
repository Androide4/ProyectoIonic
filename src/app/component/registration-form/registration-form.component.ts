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

    categories: string[] = ['Electronica', 'Ropa', 'Hogar', 'Juguetes'];

    product: Product = {
      id: null,
      title: '',
      price: null,
      description: '',
      category: '',
      image: '',
      rating: {
        rate: null,
        count: null,
      },
    };
  
    ngOnInit() {}
  
    guardarProducto() {
      this.messageEvent.emit(this.product);
      alert('Producto guardado');
      this.resetForm();
    }
  
    resetForm() {
      this.product = {
        id: null,
        title: '',
        price: null,
        description: '',
        category: '',
        image: '',
        rating: {
          rate: null,
          count: null,
        },
      };
    }
  }