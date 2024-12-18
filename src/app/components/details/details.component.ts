import { AfterContentInit, AfterViewInit, Component, OnChanges, SimpleChanges } from '@angular/core';
import { DetailsMoviesComponent } from "../details-movies/details-movies.component";
import { DetailsReviewsComponent } from "../details-reviews/details-reviews.component";
import { DetailsActorsComponent } from "../details-actors/details-actors.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [DetailsMoviesComponent, DetailsReviewsComponent, DetailsActorsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnChanges, AfterContentInit, AfterViewInit {
movieId = ''
  constructor (private _activatedRouted:ActivatedRoute){
  this._activatedRouted.params.subscribe((p) => {
    this.movieId = p["id"];
    console.log("movie id is ",this.movieId);
    
  })
}
ngOnChanges(changes: SimpleChanges): void {
  console.log("ngOnChanges was called"); 
}
ngAfterContentInit(): void {
  console.log("ngAfterContentInit was called");
}
ngAfterViewInit(): void {
    console.log("ngAfterViewInit was called");
    
}
}
