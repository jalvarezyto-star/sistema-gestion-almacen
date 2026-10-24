import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../producto-service';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './detalle-producto.html'
})
export class DetalleProducto implements OnInit{
  productoSeleccionado: any;

  constructor(private route: ActivatedRoute,
    private productoService: ProductoService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoSeleccionado = this.productoService.obtenerProductoPorId(id);
    }
    
 }
}