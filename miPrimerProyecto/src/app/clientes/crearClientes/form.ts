import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Cliente } from '../modelos/cliente';
import { ClienteService } from '../servicios/cliente.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    SweetAlert2Module,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {

  public formulario!: FormGroup;
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente';

  constructor(private clienteService: ClienteService, private router: Router) { }


  ngOnInit(): void {
    this.formulario = new FormGroup({

      codigo: new FormControl<string>(
        '',
        {
          validators: [
            Validators.required,
            validarFormatoCodigo()
          ],
          asyncValidators: [
            validarDuplicadoCodigo(this.clienteService)
          ]
        }
      ),

      nombre: new FormControl<string>(
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]
      ),

      apellido: new FormControl<string>(
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]
      ),

      email: new FormControl<string>(
        '',
        [
          Validators.required,
          Validators.email,
          validarCorreoUnicauca()
        ]
      ),
      createAt: new FormControl<Date>(
        new Date()
      )
    });
  }

  public crearCliente(): void {
    console.log('Creando cliente');

    if (this.formulario.invalid) {

      this.formulario.markAllAsTouched();

      Swal.fire(
        'Formulario inválido',
        'Por favor, verifica los datos ingresados.',
        'warning'
      );
      return;
    }

    const cliente = this.formulario.value;

    console.log('Datos del cliente:', cliente);
    this.clienteService.createCliente(cliente).subscribe({
      next: (response: Cliente) => {
        console.log('Cliente creado exitosamente');
        console.log(response);
        Swal.fire(
          'Nuevo cliente',
          `Cliente ${response.nombre} creado con éxito`,
          'success'
        );
        this.router.navigate(['clientes/listarClientes']);
      },

      error: (error) => {

        console.error('Error al crear el cliente:', error);

        Swal.fire(
          'Error',
          'No fue posible crear el cliente.',
          'error'
        );
      }
    });
  }
}

export function validarCorreoUnicauca(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    if (!email) {
      return null;
    }
    const dominio = '@unicauca.edu.co';
    return email.endsWith(dominio) ? null : { emailInvalido: true };

  };
}

export function validarDuplicadoCodigo(
  clienteService: ClienteService
): AsyncValidatorFn {

  return (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {

    if (!control.value) {
      return of(null);
    }

    return clienteService.verificarCodigo(control.value).pipe(
      map((existe) => {
        if (existe) {
          return {
            codigoDuplicado: true
          };
        }
        return null;
      }),
      catchError(() => of(null))
    );

  };

}

export function validarFormatoCodigo(): ValidatorFn {

  return (
    control: AbstractControl
  ): ValidationErrors | null => {
    const valor = control.value;
    if (!valor) {
      return null;
    }
    const valido = /^\d{3}456$/.test(valor);
    return valido ? null: { codigoInvalido: true };
  };
}
