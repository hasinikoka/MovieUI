import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movielist',
  template: `
    <div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading ">Movies </div>
  <div class="panel-body ">
    <button type= "button" class= "btn btn-primary" (click)="add()">Add</button>
  </div>
  <body>
  <table class= "table table-striped">
  <thead>
  <tr>
    <th>Movie Id</th>
     <th>Movie Name</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let movie of movies">
     <td>{{movie.movieId}}</td>
     <td><a [routerLink]="['/detail',movie.movieId]">{{movie.movieName}}</a></td>
     <td>
     <button type="button" class="btn btn-primary" (click)="edit(movie.movieId)">Edit</button>
     <button type="button" class="btn btn-primary" (click)="delete(movie)">Delete</button>
     </td>
     </tr>
     </tbody>
  </table>
  </body>
  </div>
  <router-outlet></router-outlet>

  `,
  styles: []
})
export class MovielistComponent implements OnInit {
 
  movies:Array<Movie>=[];

  constructor(private movieService:MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(response =>{
      this.movies = response.json();
      }, error => console.log(error.json ()));
    }
    edit(movieId:number){
      this.router.navigate(['movie/form1', movieId]);
    }

    delete(movie:Movie){
      this.movieService.deleteMovie(movie.movieId).subscribe(response =>{
          let index = this.movies.indexOf(movie);
        this.movies.splice(index,1);
      }, error => console.log(error.json()));
    }

    add(){
      this.router.navigate(['movie/form1']);
    }
}