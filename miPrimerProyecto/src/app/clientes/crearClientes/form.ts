import { Component } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from '../servicios/cliente.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, SweetAlert2Module, HttpClientModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})

export class Form {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente'

  contructor(private clienteService: ClienteService, private router: Router) { }

  public crearCliente() {
    this.clienteService.(this.cliente).subscribe(
      response => {
        console.log('cliente creado exitosamente');
        console.log(this.cliente);
        this.router.navigate(['clientes/listarClientes']),
          Swal.fire('Nuevo cliente', `Cliente ${response.nombre} creado con exito`, 'success');
      })
  }
}
