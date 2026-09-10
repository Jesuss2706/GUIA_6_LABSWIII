import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  public proyecto: any = {anio: '2026', nombreProyecto: 'Proyecto de clase'};
  public tecnologia: any = {leyenda: 'WebApp desarrollada con Angular', tec1:'Angular', tec2:'Spring-Spring Boot'};
  public autor: string = 'Desarrollado por Jesus :D';
}
