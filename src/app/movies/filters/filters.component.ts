import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  genreList: string[];
  directorList: string[];
  actorList: string[];
  yearList: string[];
  ratingList: string[];
  awardList: string[];



  constructor() {
    this.genreList = ['gen 1', 'gen 2', 'gen 3'];
    this.directorList =  ['dir 1', 'dir 2', 'dir 3'];
    this.actorList =  ['act 1', 'act 2', 'act 3'];
    this.yearList = ['year 1', 'year 2', 'year 3'];
    this.ratingList = ['rat 1', 'rat 2', 'rat 3'];
    this.awardList =  ['award 1', 'award 2', 'award 3'];


   }
  genre = new FormControl();
  director = new FormControl();
  actor = new FormControl();
  year = new FormControl();
  rating = new FormControl();
  awards = new FormControl();




  ngOnInit() {
  }

}
