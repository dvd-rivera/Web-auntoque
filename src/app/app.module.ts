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
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { SomosComponent } from './somos/somos.component';
import { LoginAyudaComponent } from './login-ayuda/login-ayuda.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'faqs', component: FAQsComponent },
  { path: 'Quienes-Somos', component: SomosComponent },
  { path: 'Ayuda-Tecnica', component: LoginAyudaComponent },
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
    SomosComponent,
    LoginAyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, routerOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
