import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: 'user', icon: 'person' },//Direcciona a la ruta donde esta la pagina de usuario(19/02/2025)
    { title: 'Editar Perfil', url: 'user-edit', icon: 'pencil' },//Direcciona a la ruta donde esta la pagina de editar usuario(19/02/2025)
    { title: 'Productos', url: 'product', icon: 'file-tray-stacked' }, //Direcciona a la ruta donde esta la pagina de productos(01/03/2025)
    { title: 'Carrito Compras', url: 'shopping-cart', icon: 'cart' },//Direcciona a la ruta donde esta la pagina de productos(23/03/2025)
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
