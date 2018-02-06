import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service'

@Component({
  selector: 'app-moviepage',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MoviepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}