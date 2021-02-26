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

  

  

}
