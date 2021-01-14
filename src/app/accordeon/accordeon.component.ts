import { Component, OnInit } from '@angular/core';
import { FAQs } from '../interfases/faqs';

@Component({
  selector: 'AccordeonComponent',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.sass']
})
export class AccordeonComponent implements OnInit {

  preguntas: FAQs[];

  constructor() {
    this.preguntas = [
      {
        pregunta: "aca va la pregunta 1",
        respuesta: "aca va la respuesta 1"
      },
      {
        pregunta: "aca va la pregunta 2",
        respuesta: "aca va la respuesta 2"
      }
    ]
  }


  ngOnInit(): void {
  }



}
