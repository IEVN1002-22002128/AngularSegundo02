import { Routes } from "@angular/router";

export default[//arreglo de rutas
  {
    path: 'distancia',
    loadComponent:()=>import('./distancia/distancia.component').then(m=>m.DistanciaComponent)
  },

  {
    path: 'multiplicacion',
    loadComponent:()=>import('./multiplicacion/multiplicacion.component').then(m=>m.MultiplicacionComponent)
  },

  {
    path: 'zodiaco',
    loadComponent:()=>import('./zodiaco/zodiaco.component').then(m=>m.ZodiacoComponent)
  },

  {
    path: 'multiplicar',
    loadComponent:()=>import('./multiplicar/multiplicar.component').then(m=>m.MultiplicarComponent)
  },

] as Routes
