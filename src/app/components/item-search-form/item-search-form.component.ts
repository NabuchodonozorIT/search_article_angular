import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ItemSearchService} from '../../services/item-search-service.service';

@Component({
  selector: 'app-item-search-form',
  templateUrl: './item-search-form.component.html',
  styleUrls: ['./item-search-form.component.scss']
})
export class ItemSearchFormComponent implements OnInit {

  constructor(private itemSearch: ItemSearchService) {
  }

  public filterSearch: FormControl;
  public filterActive: FormControl;
  public filterPromo: FormControl;

  public ngOnInit(): void {
    this.filterSearch = new FormControl('Gorgeous Wooden');
    this.filterActive = new FormControl(false);
    this.filterPromo = new FormControl(false);
    this.itemSearch.searchData(this.getFiltersForm(), 'product');
  }

  private getFiltersForm(): object {
    return {
      filterSearch: this.filterSearch,
      filterActive: this.filterActive,
      filterPromo: this.filterPromo,
    };
  }

}
