import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/interfaces/product.model';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreatingListService {

  private apiUrl = 'https://fakestoreapi.com/products';
  listadosProductos: Product[] = [];
  productosCargados = false;

  constructor(private http: HttpClient) {}

  

  cargarApiHttp(): Observable<Product[]> {

    const localData = localStorage.getItem('productosNuevos');
    const nuevosProductos: Product[] = localData ? JSON.parse(localData) : [];

    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap(productos => {
        this.listadosProductos = [...productos, ...nuevosProductos];
        this.productosCargados = true;
      }),
      catchError(error => {
        console.error('Error al cargar productos:', error);
        this.productosCargados = false;
        return of([]); 
      })
    );
  }

  postProducto(product: Product): Observable<Product> {
    const localData = localStorage.getItem('productosNuevos');
    const productosGuardados = localData ? JSON.parse(localData) : [];
    productosGuardados.push(product);
    localStorage.setItem('productosNuevos', JSON.stringify(productosGuardados));
    this.listadosProductos.push(product);
    return of(product); 
  }

  obtenerProductos(): Product[] {
    return this.listadosProductos;
  }
}
