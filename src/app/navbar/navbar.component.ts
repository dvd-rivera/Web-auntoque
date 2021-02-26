import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'NavbarComponent',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const navItems = document.querySelectorAll(".nav-item")

    function cerrarMenu() {
      let nav = document.getElementById("nav")
      nav?.classList.remove("navAbierto")
    }

    navItems.forEach(function (navItem) {
      navItem.addEventListener("click", cerrarMenu);
    }) 
    
  }


  abrirmenu() {
    let nav = document.getElementById("nav")
    nav?.classList.toggle("navAbierto")
  }

  abrirLogin() {
    const formLoginCont :any = document.getElementById('form-login-container')

    formLoginCont?.classList.toggle('mostrar');
  }

  errorLogin() {
    const inputs = document.querySelectorAll('.login-container form input')
    inputs.forEach(input => {
      input.classList.add('error')
    })
  }




}
