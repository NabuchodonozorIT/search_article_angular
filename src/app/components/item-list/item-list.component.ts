import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ArticleData} from '../../model/articleData';
import {ItemSearchService} from '../../services/item-search-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {
  pageOfItems: Array<ArticleData>;

  public filteredItems$: Observable<ArticleData[]>;
  private filteredItemsListSubscription: Subscription;

  constructor(private itemSearch: ItemSearchService) {
  }

  public ngOnInit(): void {
    this.filteredItemsListSubscription = this.itemSearch.filteredItemsListSubscription.subscribe((filteredItems) => {
      this.filteredItems$ = filteredItems;
    });
  }

  public ngOnDestroy(): void {
    this.filteredItemsListSubscription.unsubscribe();
  }

  public onChangePage(pageOfItems: Array<ArticleData>): void {
    this.pageOfItems = pageOfItems;
  }

}
