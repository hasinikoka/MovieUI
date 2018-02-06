import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MovieModule } from './movie/movie.module';
import { APP_ROUTES } from './app.routing';
import { NavbarComponent } from './navbar.component';
import { AppComponent } from './app.component';

import { Movie_ROUTES } from "./movie/movie.routing";


@NgModule({
  declarations: [
    AppComponent
    
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieModule,
    Movie_ROUTES,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
