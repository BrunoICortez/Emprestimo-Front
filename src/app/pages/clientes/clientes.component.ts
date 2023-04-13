import { Component } from '@angular/core';
import { IClientes } from 'src/app/interfcaes/clientes';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: IClientes[] = [];
  constructor( private clienteService: ClientesService ){}

  ngOnInit(){
    this.clienteService.buscarTodosClientes().subscribe((result: IClientes[]) => {
      this.clientes = result;

    });
  }
}

