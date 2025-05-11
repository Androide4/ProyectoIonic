import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  standalone: false,
})
export class RegistrationFormComponent implements OnInit {
  @Input() productos: Product[] = [];
  @Output() messageEvent = new EventEmitter<Product>();

  categories: string[] = ['Electronica', 'Ropa', 'Hogar', 'Juguetes'];

  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      id: [null, Validators.required],
      title: ['', Validators.required],
      price: [null, Validators.required],
      description: [''],
      category: [''],
      image: [''],
      rating: this.fb.group({
        rate: [null],
        count: [null],
      }),
    });
  }

  guardarProducto() {
    if (this.productForm.valid) {
      this.messageEvent.emit(this.productForm.value);
      alert('Producto guardado');
      this.resetForm();
    } else {
      alert('Por favor llena todos los campos requeridos');
    }
  }

  resetForm() {
    this.productForm.reset();
  }
}