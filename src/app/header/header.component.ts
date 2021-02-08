import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'HeaderComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.animacionHeader()
  
  };


  animacionHeader() {
    
  };

}
