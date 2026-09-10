import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  public nombres: string = "Jesus"
  public apellidos: string = "Lasso"
  public disciplina: string = "Desarrollador de Software"
  public descripcion: string = "XD six seven 67676767"
}
