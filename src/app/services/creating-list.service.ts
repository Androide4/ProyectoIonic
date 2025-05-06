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
    if (this.productosCargados) {
      return of(this.listadosProductos); // No volver a hacer GET si ya tenemos los datos
    }

    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap(productosApi => {
        this.listadosProductos = productosApi;
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
    return this.http.post<Product>(this.apiUrl, product).pipe(
      tap(nuevoProducto => {
        // Agregamos manualmente a la lista local que se usa en ProductPage
        this.listadosProductos.unshift(nuevoProducto);  // también puede ser .push()
      }),
      catchError(error => {
        console.error('Error al crear producto:', error);
        return of(product); // Devuelve el original para no romper el flujo
      })
    );
  }
  
  

  
  
  
  obtenerProductos(): Product[] {
    return this.listadosProductos;
  }
}
