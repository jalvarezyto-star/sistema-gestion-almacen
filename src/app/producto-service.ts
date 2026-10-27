import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class ProductoService {

    private productos = [
    { id: 'PROD-001', nombre: 'Martillo de Goma', categoria: 'Ferretería', stock: 45 },
    { id: 'PROD-002', nombre: 'Clavos 2 pulgadas (Caja)', categoria: 'Ferretería', stock: 120 },
    { id: 'PROD-003', nombre: 'Destornillador Estrella', categoria: 'Ferretería', stock: 4 },
    { id: 'PROD-004', nombre: 'Llave Inglesa 10"', categoria: 'Ferretería', stock: 15 },
    { id: 'PROD-005', nombre: 'Taladro Percutor', categoria: 'Ferretería', stock: 8 },
    { id: 'PROD-006', nombre: 'Alicate Universal', categoria: 'Ferretería', stock: 8 },
    { id: 'PROD-007', nombre: 'Huincha de medir 5m', categoria: 'Ferretería', stock: 7 },
    { id: 'PROD-008', nombre: 'Sierra Manual', categoria: 'Ferretería', stock: 22 },
    
    { id: 'PROD-009', nombre: 'Cable Mellizo 14 AWG (Rollo)', categoria: 'Electricidad', stock: 30 },
    { id: 'PROD-010', nombre: 'Foco LED 12W', categoria: 'Electricidad', stock: 200 },
    { id: 'PROD-011', nombre: 'Interruptor Simple', categoria: 'Electricidad', stock: 150 },
    { id: 'PROD-012', nombre: 'Tomacorriente Doble', categoria: 'Electricidad', stock: 140 },
    { id: 'PROD-013', nombre: 'Cinta Aislante Negra', categoria: 'Electricidad', stock: 300 },
    { id: 'PROD-014', nombre: 'Llave Termomagnética 20A', categoria: 'Electricidad', stock: 40 },
    { id: 'PROD-015', nombre: 'Soquete de Porcelana', categoria: 'Electricidad', stock: 80 },
    
    { id: 'PROD-016', nombre: 'Pintura Látex Blanco (Galón)', categoria: 'Pintura', stock: 60 },
    { id: 'PROD-017', nombre: 'Esmalte Sintético Negro', categoria: 'Pintura', stock: 25 },
    { id: 'PROD-018', nombre: 'Rodillo de 9 pulgadas', categoria: 'Pintura', stock: 40 },
    { id: 'PROD-019', nombre: 'Brocha de 2 pulgadas', categoria: 'Pintura', stock: 90 },
    { id: 'PROD-020', nombre: 'Bandeja para pintura', categoria: 'Pintura', stock: 35 },
    { id: 'PROD-021', nombre: 'Thinner Estándar (Litro)', categoria: 'Pintura', stock: 110 },
    { id: 'PROD-022', nombre: 'Lija de agua #120', categoria: 'Pintura', stock: 500 },
    { id: 'PROD-023', nombre: 'Masilla para pared', categoria: 'Pintura', stock: 45 },
    
    { id: 'PROD-024', nombre: 'Tubo PVC 1/2 pulgada', categoria: 'Plomería', stock: 180 },
    { id: 'PROD-025', nombre: 'Codo PVC 90 grados', categoria: 'Plomería', stock: 350 },
    { id: 'PROD-026', nombre: 'Pegamento para PVC', categoria: 'Plomería', stock: 65 },
    { id: 'PROD-027', nombre: 'Cinta Teflón', categoria: 'Plomería', stock: 400 },
    { id: 'PROD-028', nombre: 'Válvula de paso 1/2"', categoria: 'Plomería', stock: 55 },
    { id: 'PROD-029', nombre: 'Trampa para lavadero', categoria: 'Plomería', stock: 30 },
    { id: 'PROD-030', nombre: 'Manguera flexible agua', categoria: 'Plomería', stock: 85 },

    { id: 'PROD-031', nombre: 'Mesa de estudio', categoria: 'Muebles', stock: 42 }
  ];

  obtenerProductos(){
    return this.productos;
  }

  buscarPorCategoria(categoria: string) {
    if (categoria === 'Todas') {
      return this.productos;
    }
    return this.productos.filter(producto => producto.categoria === categoria);
  } 

  obtenerProductoPorId(id: string) {
    return this.productos.find(producto => producto.id === id);   

}
  }