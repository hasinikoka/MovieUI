import { Movie } from './movie';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MovieService{
    URL:string="http://localhost:8080/Movie";
     private movies:Array<Movie>= []
        constructor(private http:Http) { }


    public getMovies(){
        return this.http.get(this.URL);
    }

    getMovie(movieId:number){
        return this.http.get(this.URL+"/"+movieId)
    }

    deleteMovie(movieId:number){
        return this.http.delete(this.URL+"/"+movieId)
    }

    saveMovie(movie:Movie){
        let rheader = new Headers();
        rheader.set("content-type","application/json");
        if(movie.movieId===undefined){
            console.log(movie.movieName);
            return this.http.post(this.URL,JSON.stringify(movie), {headers:rheader})
        }
        else{
            return this.http.put(this.URL,JSON.stringify(movie),
        {headers:rheader});
        }
    }
}