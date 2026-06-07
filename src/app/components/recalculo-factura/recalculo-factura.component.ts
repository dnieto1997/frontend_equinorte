import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recalculo-factura',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './recalculo-factura.component.html',
  styleUrl: './recalculo-factura.component.scss'
})
export class RecalculoFacturaComponent implements OnInit {

  facturas: any[] = [];
  usuarios: any[] = [];

  facturaSeleccionada: any = null;
  usuarioSeleccionado: any = null;

  nuevoSubtotal: number | any = null;

  resultadoRecalculo: any = null;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.obtenerFacturas();
    this.obtenerUsuarios();
  }

  obtenerFacturas(): void {
    this.apiService.getAllFacturas().subscribe({
      next: (resp) => {
        this.facturas = resp;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  obtenerUsuarios(): void {
    this.apiService.getAllUsers().subscribe({
      next: (resp) => {
        this.usuarios = resp;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  cargarFactura(): void {

    this.resultadoRecalculo = null;

    if (this.facturaSeleccionada) {
      this.nuevoSubtotal = this.facturaSeleccionada.subtotal;
    }

  }

 calcular(): void {

  if (!this.facturaSeleccionada) {
    Swal.fire(
      'Atención',
      'Seleccione una factura',
      'warning'
    );
    return;
  }

  if (!this.usuarioSeleccionado) {
    Swal.fire(
      'Atención',
      'Seleccione un usuario',
      'warning'
    );
    return;
  }

  if (!this.nuevoSubtotal || this.nuevoSubtotal <= 0) {
    Swal.fire(
      'Atención',
      'Ingrese un subtotal válido',
      'warning'
    );
    return;
  }

  const subtotalActual = Number(this.facturaSeleccionada.subtotal);

  if (subtotalActual === 0) {
    Swal.fire(
      'Error',
      'No se puede recalcular una factura con subtotal 0',
      'error'
    );
    return;
  }

  const diferencia = this.nuevoSubtotal - subtotalActual;

  if (diferencia > 0) {

    if (
      this.usuarioSeleccionado.tipoUsuario === 'OPERADOR' &&
      diferencia > 20000
    ) {
      Swal.fire(
        'Operación no permitida',
        'Operador solo puede aumentar hasta $20.000',
        'warning'
      );
      return;
    }

    if (
      this.usuarioSeleccionado.tipoUsuario === 'SUPERVISOR' &&
      diferencia > 50000
    ) {
      Swal.fire(
        'Operación no permitida',
        'Supervisor solo puede aumentar hasta $50.000',
        'warning'
      );
      return;
    }

  }

  const factor = this.nuevoSubtotal / subtotalActual;

  const detalles: any[] = [];

  let acumulado = 0;

  this.facturaSeleccionada.detalles.forEach(
    (detalle: any, index: number) => {

      const valorActual =
        Number(detalle.subtotal ?? detalle.valor);

     let valorNuevo =
  Math.trunc((valorActual * factor) * 100) / 100;

      if (
        index ===
        this.facturaSeleccionada.detalles.length - 1
      ) {
        valorNuevo =
  Math.trunc(
    (this.nuevoSubtotal - acumulado) * 100
  ) / 100;
      }

      acumulado += valorNuevo;

      detalles.push({
        producto: detalle.producto,
        cantidad: detalle.cantidad,
        valorAnterior: valorActual,
        valorNuevo: valorNuevo
      });

    }
  );

  const iva =
  Math.trunc(
    (this.nuevoSubtotal * 0.19) * 100
  ) / 100;
  const total =
  Math.trunc(
    (this.nuevoSubtotal + iva) * 100
  ) / 100;

  this.resultadoRecalculo = {
    subtotalAnterior: subtotalActual,
    subtotalNuevo: this.nuevoSubtotal,
    iva: iva,
    total: total,
    detalles: detalles
  };

  Swal.fire({
    icon: 'success',
    title: 'Simulación realizada',
    text: 'Revise los nuevos valores antes de guardar',
    timer: 1500,
    showConfirmButton: false
  });

}

  guardarCambios(): void {

    if (!this.resultadoRecalculo) {

      Swal.fire(
        'Atención',
        'Debe realizar el cálculo primero',
        'warning'
      );

      return;
    }

    const payload = {

      nuevoSubtotal: this.nuevoSubtotal,

      tipoUsuario:
        this.usuarioSeleccionado.tipoUsuario

    };

    this.apiService
      .recalcularFactura(
        this.facturaSeleccionada.idFactura,
        payload
      )
      .subscribe({

        next: () => {

          Swal.fire(
            'Correcto',
            'Factura actualizada correctamente',
            'success'
          );

          this.resultadoRecalculo = null;

          this.facturaSeleccionada = null;

          this.usuarioSeleccionado = null;

          this.nuevoSubtotal = null;

          this.obtenerFacturas();

        },

        error: (error) => {

          Swal.fire(
            'Error',
            error?.error?.message ||
            'No fue posible actualizar la factura',
            'error'
          );

        }

      });

  }

}