import { Component,OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TablaProductos } from '../tabla-productos/tabla-productos';
import { ProductoService } from '../producto-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,MatSelectModule,TablaProductos],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  productosEnPantalla: any[] = [];
  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productosEnPantalla = this.productoService.obtenerProductos();

  }

  filtrarPorCategoria(categoria: string) {
    if(categoria === 'Todas') {
      this.productosEnPantalla = this.productoService.obtenerProductos();
    } else {
      this.productosEnPantalla = this.productoService.buscarPorCategoria(categoria);
    }
  }
}
