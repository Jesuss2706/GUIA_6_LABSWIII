import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Cliente } from '../modelos/cliente';
import { ClienteService } from '../servicios/cliente.service';

@Component({
  imports: [CommonModule, RouterLink, HttpClientModule, SweetAlert2Module],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export class Clientes {

  public clientes: Cliente[] = []

  constructor(private objClienteService: ClienteService){}

  ngOnInit(): void{
    this.objClienteService.getClientes().subscribe(
      clientes => {
        console.log("Listado clientes");
        this.clientes = clientes;
      }
    );
  }
}
