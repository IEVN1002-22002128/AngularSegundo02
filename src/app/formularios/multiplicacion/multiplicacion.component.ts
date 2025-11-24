import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Multiplicacion } from './multiplicacion';

@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {

  formulario!:FormGroup;
  resultado!:number;
  operacion!:number;

  final = new Multiplicacion();


  constructor(){}
  ngOnInit(): void{
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl(''),


    });
  }

  calcular():void{
    this.final.x1 = parseFloat(this.formulario.value.x1);
    this.final.y1 = parseFloat(this.formulario.value.y1);
    this.final.x2 = parseFloat(this.formulario.value.x2);
    this.final.y2 = parseFloat(this.formulario.value.y2);

    this.final.calcular();
    this.resultado = this.final.res;
  }

}
