import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-factura-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './factura-consulta.component.html',
})
export class FacturaConsultaComponent implements OnInit {

  facturas: any[] = [];
  facturaSeleccionada: any = null;

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas(): void {
    this.service.getAllFacturas().subscribe({
      next: (data) => {
        this.facturas = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  cargarFactura(): void {
    if (!this.facturaSeleccionada) {
      return;
    }
  }

  obtenerSubtotal(): number {
    if (!this.facturaSeleccionada?.detalles) {
      return 0;
    }

    return this.facturaSeleccionada.detalles.reduce(
      (total: number, item: any) =>
        total + (item.cantidad * item.precioUnitario),
      0
    );
  }
}