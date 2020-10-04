import {Component, Input, OnInit} from '@angular/core';
import {ArticleData} from '../../model/articleData';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  public item: ArticleData;
  public buttonLabel: string;

  @Input('item')
  set setAlbum(item) {
    this.item = item;
    this.buttonLabel = this.getButtonLabel(item.active);
  }

  constructor() {
  }

  public ngOnInit(): void {
  }

  private getButtonLabel(status): string {
    return status ? 'Show details' : 'Unavailable';
  }

}
