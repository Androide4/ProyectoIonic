import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: 'user', icon: 'mail' },//Direcciona a la ruta donde esta la pagina de usuario(19/02/2025)
    { title: 'Editar Perfil', url: 'user-edit', icon: 'paper-plane' },//Direcciona a la ruta donde esta la pagina de editar usuario(19/02/2025)
    { title: 'Productos', url: 'product', icon: 'heart' }, //Direcciona a la ruta donde esta la pagina de productos(01/03/2025)
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
