import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoBodiesComponent } from './auto-bodies/auto-bodies.component';
import { ContactusComponent } from './contact-us/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MemoAutorepairComponent } from './memo-autorepair/memo-autorepair.component';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [		
    AppComponent,
    AutoBodiesComponent,
    NavbarComponent ,
    ContactusComponent ,
    MainBannerComponent ,
    FooterComponent,
      MemoAutorepairComponent,
      MainComponentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
