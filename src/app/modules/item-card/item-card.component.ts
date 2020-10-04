import {Component, Input, OnInit} from '@angular/core';
import {ArticleData} from '../item-search-form/articleData';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  public item: ArticleData;

  @Input('item')
  set setAlbum(item){
    this.item = item;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
