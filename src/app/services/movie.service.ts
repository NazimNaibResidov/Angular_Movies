import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url ='http://www.omdbapi.com/?s=';
  durl ='http://www.omdbapi.com/?i=';
  apiKey = '&apikey=651b6f5f';
  constructor(private http:HttpClient) { }
  GetMovies(title:string)
  {
    return this.http.get(this.url + title +this.apiKey);
  }
  GetById(id:string)
  {
    return this.http.get(this.durl+id+this.apiKey);
  }
  
}
