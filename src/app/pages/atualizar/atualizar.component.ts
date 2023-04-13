import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClientes } from 'src/app/interfcaes/clientes';
import { ClientesService } from 'src/app/service/clientes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent {
  clienteForm = new FormGroup({

    cpf: new FormControl('', Validators.required),
    nome: new FormControl('',Validators.required),
    telefone: new FormControl('12 34567 8910',Validators.required),
    rendimentoMensal: new FormControl(0,Validators.required),
    endereco: new FormGroup({
    rua: new FormControl('',Validators.required),
    numero: new FormControl(0 ,Validators.required),
    cep: new FormControl('',Validators.required)
    })
  })


  constructor(private clientesService: ClientesService, private route: ActivatedRoute, private router: Router) {}
  clienteCpf ='';

  ngOnInit() {
    this.clienteCpf = String(this.route.snapshot.paramMap.get('cpf'));
    if (this.clienteCpf != null) {
      this.clientesService.buscarClientesPorCpf(this.clienteCpf).subscribe((clientes: IClientes) => {
        this.clienteForm.setValue({
          cpf: clientes.cpf,
          nome: clientes.nome ,
          telefone: clientes.telefone,
          rendimentoMensal: clientes.rendimentoMensal,
          endereco: {
          rua: clientes.endereco.rua,
          numero: clientes.endereco.numero,
          cep: clientes.endereco.cep,
          }
        })
      });
    }
  }
   editar() {
    const clientes: IClientes = this.clienteForm.value as IClientes;

    this.clientesService.editarClientes(this.clienteCpf.toString(), clientes).subscribe(result => {
        Swal.fire(
          'Okay!',
          'Edição realizada com sucesso!',
        );
        this.router.navigate(['/clientes']);
    }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Deu errado! .'
        })
        console.error(error);
    })
  }
}
