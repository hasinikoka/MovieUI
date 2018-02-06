import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-moviedetail',
  template: `
    <p>
      Movie Id of the selected movie is {{movieId}} <br>
      Movie Name of the selected movie is {{movieName}}
    </p>
     `,
  styles: []
})
export class MoviedetailComponent implements OnInit {

  movieId:String;
  movieName:String;
  movieIdSubscription:Subscription;

  constructor(private ac:ActivatedRoute) {
      this.movieIdSubscription = this.ac.params.subscribe(params =>{
        this.movieId = params['movieId'];
        this.movieName = params['movieName'];
      })
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.movieIdSubscription.unsubscribe();
  }

}