import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'NavbarComponent',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  abrirmenu() {
    let nav = document.getElementById("nav")
    nav?.classList.toggle("navAbierto")
  }

}
