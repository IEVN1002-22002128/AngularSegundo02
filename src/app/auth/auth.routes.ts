import { Routes } from "@angular/router";

export default[//arreglo de rutas
  {
    path: 'sign-in',
    loadComponent:()=>import('./features/sign-in/sign-in.component').then(c=>c.SignInComponent)
  },

  {
    path: 'sign-up',
    loadComponent:()=>import('./features/sign-up/sign-up.component').then(c=>c.SignUpComponent)
  },

] as Routes
