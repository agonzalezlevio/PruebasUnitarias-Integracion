import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  constructor(public medicoService: MedicoService) { }

  public medicos: any[] = [];


  ngOnInit() {
  }


  public saludarMedico(nombre: string): string {
    return `Hola ${nombre}`;
  }

  public obtenerMedicos() {
    this.medicoService.getMedicos().subscribe((medicos: any[]) => this.medicos = medicos);
  }

}
