import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  movie_title = "John wick";
  //   constructor (private _activatedRouted:ActivatedRoute){
  //   this._activatedRouted.params.subscribe((p) => {
  //     this.movie_title = p["movieTitle"];
  //     console.log("movie id is ",this.movie_title);
      
  //   })
  // }
}
