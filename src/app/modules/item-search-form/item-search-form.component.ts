import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ItemSearchService} from '../../services/item-search-service.service';

@Component({
  selector: 'app-item-search-form',
  templateUrl: './item-search-form.component.html',
  styleUrls: ['./item-search-form.component.scss']
})
export class ItemSearchFormComponent implements OnInit, OnDestroy {

  constructor(private itemSearch: ItemSearchService) {
  }

  public filter: FormControl;

  public ngOnInit(): void {
    this.filter = new FormControl('Gorgeous Wooden');
    this.itemSearch.searchData(this.filter, 'product');
  }

  public ngOnDestroy(): void {

  }
}

