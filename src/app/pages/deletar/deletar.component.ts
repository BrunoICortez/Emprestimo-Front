import { Component } from '@angular/core';
import { IClientes } from 'src/app/interfcaes/clientes';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/service/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent {
  clientes: IClientes[] = [];
  router: any;
  constructor(private clientesService: ClientesService, private route: ActivatedRoute) {}

  cpfCliente = '';
  ngOnInit() {
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Não será possíverl reverter essa ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.cpfCliente = String(this.route.snapshot.paramMap.get('cpf'));

        this.clientesService.excluirClientes(this.cpfCliente).subscribe(result => {
            Swal.fire(
            'Tudo certo!',
            'Cadastro excluído com sucesso!',
            'success'
            );
            this.router.navigate(['/clientes']);
        }, error => {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado! Verifique o erro no console.'
            })
            console.error(error);
        })

      }
    this.router.navigate(['/clientes']);
    });

  }

}

