import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private currentMovie: Movie;
  constructor() { }

  ngOnInit() {
  }

  getCurrentMovie(): Movie {
    return this.currentMovie;
  }

}
