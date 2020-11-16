import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CompaniesComponent } from './companies/companies.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { AfcComponent } from './afc/afc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterAfcComponent } from './footer-afc/footer-afc.component';
import { CompetenceAfcComponent } from './afc/competence-afc/competence-afc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CompaniesComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    AfcComponent,
    FooterAfcComponent,
    CompetenceAfcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
