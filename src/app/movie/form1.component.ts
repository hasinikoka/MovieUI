import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MovieService } from './movie.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styles: []
})
export class Form1Component implements OnInit, OnDestroy {

  movieForm: FormGroup;
  movieIdSubscription: Subscription;
  movieId:number;

  constructor(private MovieService: MovieService, private fb: FormBuilder, private activatedRoute:ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    this.movieForm = this.fb.group({
      movieName: this.fb.control('',[Validators.required]),
    })

    this.movieIdSubscription = this.activatedRoute.params.subscribe((params) => {
      if (params['movieId']!==undefined){
        this.MovieService.getMovie(parseInt(params['movieId'])).subscribe(response =>{
          let movie = response.json();
          this.movieId = movie.movieId;
          this.movieForm.setValue({
            movieName : movie.movieName
          });
        },error => console.log(error.json()));
      }
    });
  }
  ngOnDestroy(){
    this.movieIdSubscription.unsubscribe();
  }
  get movieName(){
    return this.movieForm.get('movieName');
  }
  handleFormSubmit(){
    console.log(this.movieForm.value);
    this.movieForm.value.authorId = this.movieId;
    //this.courseForm.value.courseName = this.courseName;    
    this.MovieService.saveMovie(this.movieForm.value).subscribe (response =>{
        console.log("here "+response.json());
        this.movieForm.reset();
        console.log("iam here");
        this.router.navigate(['/movie/list1']);
    }, error => console.log(error.json()));
  }

}