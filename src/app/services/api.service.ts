import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpService: HttpService) {}

  getAllFacturas(): Observable<any> {
    return this.httpService.get('facturas');
  }

  getAllUsers(): Observable<any> {
    return this.httpService.get('users');
  }

  recalcularFactura(idFactura: number, data: any): Observable<any> {
  return this.httpService.put(
    `facturas/recalcular/${idFactura}`,
    data
  );
}
}
