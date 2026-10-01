import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Cliente } from '../modelos/cliente';
import { ClienteService } from '../servicios/cliente.service';

@Component({
  imports: [CommonModule, RouterLink, SweetAlert2Module],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export class Clientes implements OnInit {

  public clientes: Cliente[] = []

  constructor(private objClienteService: ClienteService){}

  ngOnInit(): void{
    this.objClienteService.getClientes().subscribe(
      (clientes: Cliente[]) => {
        console.log("Listado clientes");
        this.clientes = clientes;
      }
    );
  }
}
