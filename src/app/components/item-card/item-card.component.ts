import {Component, Input, OnInit} from '@angular/core';
import {ArticleData} from '../../model/articleData';
import {ItemSearchService} from '../../services/item-search-service.service';
import {DialogService} from '../../services/dialog.service';

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

  constructor(private itemSearch: ItemSearchService,
              private dialogService: DialogService) {
  }

  public ngOnInit(): void {
  }

  public showDetails(id: number): void {
    this.itemSearch.getData(`product/${id}`).then(item => {
      this.dialogService.openModal(item);
    });
  }

  private getButtonLabel(status): string {
    return status ? 'Show details' : 'Unavailable';
  }
}
