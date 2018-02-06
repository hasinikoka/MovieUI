import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviepageComponent } from './moviepage.component';
import { MovielistComponent } from './movielist.component';
import { MoviedetailComponent } from './moviedetail.component';
import { MovieService } from './movie.service';
import { Movie_ROUTES } from './movie.routing';
import { Form1Component } from './form1.component';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MovieComponent } from './movie.component';


@NgModule({
  imports: [
    CommonModule,
    Movie_ROUTES,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ MoviepageComponent ],
  providers: [MovieService ],
  declarations: [MoviepageComponent, MovielistComponent, MoviedetailComponent,  Form1Component, MovieComponent]
})
export class MovieModule { }