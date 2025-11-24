import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Zodiaco } from './zodiaco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!:FormGroup;
  Nombre:string='';
  edad:string='';
  chino:string='';
  sexo:string='';
  imagen:string='';
  datos = new Zodiaco();

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      paterno: new FormControl(''),
      materno: new FormControl(''),
      dia: new FormControl(),
      mes: new FormControl(),
      año: new FormControl(),
      sexo: new FormControl('')

    });
  }


  imprimir() {
    this.datos.nombre = this.formulario.value.nombre;
    this.datos.paterno = this.formulario.value.paterno;
    this.datos.materno = this.formulario.value.materno;

    this.datos.dia = parseFloat(this.formulario.value.dia);
    this.datos.mes = parseFloat(this.formulario.value.mes);
    this.datos.año = parseFloat(this.formulario.value.año);

    this.datos.sexo = this.formulario.value.sexo;

    this.datos.calcularEdad();
    this.datos.calcularChino();

    this.Nombre = "Hola " + this.datos.nombre + " " + this.datos.paterno + " " + this.datos.materno;
    this.edad = "Tienes " + this.datos.edad + " años y" ;
    this.chino = "tu signo chino es " + this.datos.chino;
    this.sexo = "Eres " + this.datos.sexo;
    this.imagen = this.datos.imagen;

  }
}
