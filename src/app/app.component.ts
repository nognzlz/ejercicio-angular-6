import { Component } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {};
  public productos: Array<Producto> = new Array<Producto>();
  public producto: Producto = new Producto();

  public onSubmit() {
    this.productos.push(new Producto(this.producto.nombre, this.producto.detalle, this.producto.cantidad));
  }
}
