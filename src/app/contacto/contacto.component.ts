import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ContactoComponent',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {

  public secciones: Array<string> = ["contacto"]

  constructor() { }

  ngOnInit(): void {
  }

}
