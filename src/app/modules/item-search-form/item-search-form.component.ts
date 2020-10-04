import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ItemSearchService} from '../../services/item-search-service.service';
import {map, startWith, tap} from 'rxjs/operators';
import {combineLatest, Observable, of} from 'rxjs';
import {ArticleData} from './articleData';

@Component({
  selector: 'app-item-search-form',
  templateUrl: './item-search-form.component.html',
  styleUrls: []
})
export class ItemSearchFormComponent implements OnInit {

  constructor(private itemSearch: ItemSearchService) {
  }

  public filteredItems$: Observable<ArticleData[]>;
  public filter: FormControl;
  public showSearchContent: boolean;

  private filter$: Observable<string>;
  private items$: Observable<Observable<ArticleData[]>>;

  public ngOnInit(): void {
    this.getBasicList().then(data => {
      this.items$ = of(data);
      this.filter = new FormControl('');
      this.filter$ = this.filter.valueChanges.pipe(startWith(''));
      this.filteredItems$ = combineLatest(this.items$, this.filter$).pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(([data, filterString]) => data.filter(
          state => state.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)),
      );
    }).then( () => {
      this.showSearchContent = true;
    });
  }

  private getBasicList(): Promise<Observable<ArticleData[]> | never> {
    return this.itemSearch.getData('product').then((data) => {
      console.log('### data ###', data);
      return data;
    });
  }
}
