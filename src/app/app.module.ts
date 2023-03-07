import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoBodiesComponent } from './auto-bodies/auto-bodies.component';
import { ContactusComponent } from './contact-us/contactus.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoBodiesComponent,
    NavbarComponent ,
    ContactusComponent ,
    MainBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
