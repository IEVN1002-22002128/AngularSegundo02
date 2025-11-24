import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})


export class DistanciaComponent {

  formulario!:FormGroup;
  resultado!:number;


  constructor(){}
  ngOnInit(): void{
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });
  }

  multiNumeros():void{
    let n1 = this.formulario.value.numero1;
    let n2 = this.formulario.value.numero2;

    this.resultado = n1*n2;
  }

}
