import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { IClientes } from '../interfcaes/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  endpoint = 'clientes'
  api = environment.api;
  constructor(private http: HttpClient) { }

  buscarTodosClientes(){
    return this.http.get<IClientes[]>(`${this.api}/${this.endpoint}`);
  }
  cadastrarClientes(clientes: IClientes){
    return this.http.post(`${ this.api}/${this.endpoint}`, clientes);
  }

  buscarClientesPorCpf(cpf: String) {
    return this.http.get<IClientes>(`${this.api}/${this.endpoint}/${cpf}`, );
  }
  editarClientes(cpf: string, cliente: IClientes) {
    return this.http.put<IClientes>(`${this.api}/${this.endpoint}/${cpf}`, cliente);
  }

  excluirClientes(cpf: string) {
    return this.http.delete<IClientes>(`${this.api}/${this.endpoint}/${cpf}`);
  }
}

