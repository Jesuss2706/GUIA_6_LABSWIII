import { Component } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { ClienteService } from '../servicios/cliente.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, SweetAlert2Module],
  templateUrl: './form.html',
  styleUrl: './form.css'
})

export class Form {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente'

  constructor(private clienteService: ClienteService, private router: Router) { }

  public crearCliente() {
    this.clienteService.createCliente(this.cliente).subscribe(
      (response: Cliente) => {
        console.log('cliente creado exitosamente');
        console.log(this.cliente);
        this.router.navigate(['clientes/listarClientes']);
        Swal.fire('Nuevo cliente', `Cliente ${response.nombre} creado con exito`, 'success');
      })
  }
}
