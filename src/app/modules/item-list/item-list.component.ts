import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ArticleData} from '../item-search-form/articleData';
import {ItemSearchService} from '../../services/item-search-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {

  public filteredItems$: Observable<ArticleData[]>;
  private filteredItemsListSubscription: Subscription;

  constructor(private itemSearch: ItemSearchService) {
  }

  public ngOnInit(): void {
    this.filteredItemsListSubscription = this.itemSearch.filteredItemsListSubscription.subscribe((filteredItems) => {
      console.log('HUIHIHIHI 2', filteredItems);
      this.filteredItems$ = filteredItems;
    });
  }

  public ngOnDestroy(): void {
    this.filteredItemsListSubscription.unsubscribe();
  }

}
