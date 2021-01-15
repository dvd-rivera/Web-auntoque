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
        pregunta: "¿Cómo funciona la licencia de auntoque?",
        respuesta: "Nuestros planes de licencia tiene un cobro anual que parte desde los {{PRECIO}}, los que contemplan instalación del sistema, soporte técnico y capacitación para el personal a cargo.",
        respuesta2: "Para más detalles de los planes, revise la sección Planes."
      },
      {
        pregunta: "¿Los planes contratado se renuevan automáticamente?",
        respuesta: "La función de renovación automática de auntoque garantiza que su licencia se renueve automáticamente para que su servicio sea ininterrumpido. No obstante X meses antes de su vencimiento lo contactaremos."
      },
      {
        pregunta: "¿Es necesario pagar otra licencia si incorporo más gente en mi juzgado?",
        respuesta: "Los planes de a un toque tiene una flexibilidad de {{CANTIDAD DE USUARIOS}} para incorporar sin cancelar un costo adicional; sobre esa cantidad el costo debe reajustarse."
      },
      {
        pregunta: "¿Cuántos usuarios tienen claves individuales?",
        respuesta: "Todos los usuarios de auntoque tienen claves individuales asignadas a sus respectivos perfiles."
      },
      {
        pregunta: "¿Es posible realizar una prueba de auntoque para ver si es que se ajusta a mis necesidades?",
        respuesta: "Por supuesto, Contáctanos para que coordinemos una licencia de prueba."
      }
    ]
  }

  

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
	const acc = document.getElementsByClassName("pregunta-container");
	let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function(this: any) {
		this.classList.toggle("active");
		
        var panel: any = this.nextElementSibling;
		if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
		} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
		}
		});
    }
  	}
}
