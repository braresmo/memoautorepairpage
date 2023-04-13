import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contact-us/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { ServiceComponent } from './service/service.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsComponent } from './news/news.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ReviewsComponent } from './reviews/reviews.component';
@NgModule({
  declarations: [								
    AppComponent,
    NavbarComponent ,
    ContactusComponent ,
    MainBannerComponent ,
    FooterComponent,
      OurServiceComponent,
      ServiceComponent,
      CarouselComponent,
      NewsComponent,
      FacilitiesComponent,
      ReviewsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
