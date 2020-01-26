import { Move } from './../../models/move';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
 items;
  constructor(private http: MovieService) {}
  
  ngOnInit() {}

  GetItems(title: HTMLInputElement) {
     this.http.GetMovies(title.value)
    .subscribe((resp:any)=>{
      this.items = resp.Search;

       }
     );
       
      
    
  }
  
}
