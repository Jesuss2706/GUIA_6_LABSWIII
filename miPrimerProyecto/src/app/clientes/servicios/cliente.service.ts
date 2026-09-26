import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Cliente } from "../modelos/cliente";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8085/api/clientes';


  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    console.log('Listando clinetes desde el servicio');
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    console.log('Creando cliente desde el servicio');
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    console.log('Actualizando cliente desde el servicio');
    return this.http.put<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }

  deleteCliente(id: number): Observable<Cliente> {
    console.log('Eliminando cliente desde el servicio');
    return this.http.delete<Cliente>(this.urlEndPoint + '/' + id, {headers: this.httpHeaders});
  }
}
