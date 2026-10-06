import { CommonModule } from '@angular/common';
import { ApplicationConfig, Component, importProvidersFrom, OnInit, signal, Signal } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Cliente } from '../modelos/cliente';
import { ClienteService } from '../servicios/cliente.service';
import { routes } from '../../app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  imports: [CommonModule, RouterLink, SweetAlert2Module],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})

export class Clientes implements OnInit {

  public clientes = signal<Cliente[]>([]);

  constructor(private objClienteService: ClienteService){}

  ngOnInit(): void{
    this.objClienteService.getClientes().subscribe(
      (clientes: Cliente[]) => {
        console.log("Listado clientes");
        clientes = clientes;
      }
    );
  }
}
