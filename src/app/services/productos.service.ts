import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'https://pymesbackend.azurewebsites.net/api/productos';
  }

  get(Nombre: string, Pagina: number) {
    let params = new HttpParams();
    if (Nombre != null) {
      params = params.append('Nombre', Nombre);
    }
    params = params.append('Pagina', Pagina.toString());

    return this.httpClient.get(this.resourceUrl, { params: params });
  }

  post(obj: Producto) {
    const newProducto = {
      ProductoID: obj.IdProducto,
      ProductoNombre: obj.Nombre,
      ProductoFechaAlta: obj.FechaAlta,
      ProductoStock: obj.Stock
    };
    return this.httpClient.post(this.resourceUrl, newProducto);
  }
}
