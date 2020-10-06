import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ArticleData} from '../../model/articleData';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {

  public item: ArticleData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ArticleData) {
    this.item = data;
  }

}
