import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LoginAyudaComponent',
  templateUrl: './login-ayuda.component.html',
  styleUrls: ['./login-ayuda.component.sass']
})
export class LoginAyudaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  errorLogin() {
    const inputs = document.querySelectorAll('.login-container form input')
    const mensajeError = document.querySelectorAll('.login-container p')

    inputs.forEach(input => {
      input.classList.add('error')
    })

    mensajeError.forEach(mensaje =>
      mensaje.classList.add('mostrar'))
  }

}
