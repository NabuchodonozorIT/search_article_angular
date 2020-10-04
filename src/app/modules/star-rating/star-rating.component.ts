import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input()
  public set rating(rating: number) {
    for (let i = 0; i < this.lengthDisplayStars; i++) {
      this.stars.push(((i + 1) <= rating) ? 'checked' : 'unchecked');
    }
  }

  public stars = [];

  private lengthDisplayStars = 5;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
