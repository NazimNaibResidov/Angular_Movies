import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css']
})
export class DetayComponent implements OnInit {
item;
  constructor(private route:ActivatedRoute,private http:MovieService) { }
  
  ngOnInit() {
  const id=  this.route.snapshot.paramMap.get("id");
  this.http.GetById(id)
  .subscribe((resp)=>{
    console.log(resp);
   this.item=resp;
  })
  }

}
