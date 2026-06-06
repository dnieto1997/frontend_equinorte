import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) {}

  private getUrl(serviceName: string): string {
    return `${environment.appVersion}${serviceName}`;
  }

  get(serviceName: string) {
    return this.http.get(this.getUrl(serviceName));
  }

  post(serviceName: string, data: any) {
    return this.http.post(this.getUrl(serviceName), data);
  }

  put(serviceName: string, data: any) {
    return this.http.put(this.getUrl(serviceName), data);
  }

  patch(serviceName: string, data: any) {
    return this.http.patch(this.getUrl(serviceName), data);
  }

  delete(serviceName: string) {
    return this.http.delete(this.getUrl(serviceName));
  }
}