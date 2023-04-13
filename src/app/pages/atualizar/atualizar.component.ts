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
    telefone: new FormControl('12345678910',Validators.required),
    rendimentoMensal: new FormControl(0,Validators.required),
    endereco: new FormGroup({
    rua: new FormControl('',Validators.required),
    numero: new FormControl(0 ,Validators.required),
    cep: new FormControl('',Validators.required)
    })
  })


  constructor(private clientesService: ClientesService, private route: ActivatedRoute,private router: Router) {}
  clienteCpf ='';

  ngOnInit() {
    this.clienteCpf = String(this.route.snapshot.paramMap.get('id'));
    if (this.clienteCpf != null) {
      this.clientesService.buscarClientesPorCpf(this.clienteCpf).subscribe((cliente: IClientes) => {
        this.clienteForm.setValue({
          cpf: cliente.cpf,
          nome: cliente.nome ,
          telefone: cliente.telefone,
          rendimentoMensal: cliente.rendimentoMensal,
          endereco: {
          rua: cliente.endereco.rua,
          numero: cliente.endereco.numero,
          cep: cliente.endereco.cep,
          }
        })
      });
    }
  }
  editar() {
    const cliente: IClientes = this.clienteForm.value as IClientes;
    this.clientesService.editarClientes(this.clienteCpf.toString(), cliente).subscribe(result => {
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
