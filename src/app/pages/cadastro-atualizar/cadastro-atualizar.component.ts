import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClientes } from 'src/app/interfcaes/clientes';
import { ClientesService } from 'src/app/service/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro-atualizar.component.html',
  styleUrls: ['./cadastro-atualizar.component.css']
})
export class CadastroAtualizarComponent {

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

  cadastrar() {
    const clientes: IClientes = this.clienteForm.value as IClientes;
      this.clientesService.cadastrarClientes(clientes).subscribe(
        (result) => {
          Swal.fire(
            'Cliente cadastrado',
            'Cliente cadastrado com sucesso.',
            'success'
          );
          this.router.navigate(['/clientes']);
        },
        (error) => {
          if (error.error.errors[0]) {
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: error.error.errors[0].defaultMessage,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: error.error.message,
            });
          }
        }
      );
    }
  }
