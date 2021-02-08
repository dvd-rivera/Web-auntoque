import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { QueEsComponent } from './QueEs/quees.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { FAQsComponent } from './faqs/faqs.component';
import { RouterModule, Routes } from '@angular/router';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { SomosComponent } from './somos/somos.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: 'Quienes-Somos', component: SomosComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    QueEsComponent,
    ContactoComponent,
    FooterComponent,
    FAQsComponent,
    AccordeonComponent,
    SomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
