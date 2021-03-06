import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ArticleData} from '../model/articleData';

@Injectable({
  providedIn: 'root'
})
export class ItemSearchService {

  public filteredItemsListSubscription = new BehaviorSubject(null);

  constructor() {
  }

  private retApiURL = 'https://join-tsh-api-staging.herokuapp.com/';
  private filterSearch$: Observable<string>;
  private filterActive$: Observable<boolean>;
  private filterPromo$: Observable<boolean>;
  private items$: Observable<Observable<ArticleData[]>>;

  public searchData(filters: any, param: string): void {
    this.getData(param).then((data) => {
      return data.items;
    }).then(items => {
      this.items$ = of(items);
      this.filterSearch$ = filters.filterSearch.valueChanges.pipe(startWith(''));
      this.filterActive$ = filters.filterActive.valueChanges.pipe(startWith(false));
      this.filterPromo$ = filters.filterPromo.valueChanges.pipe(startWith(false));
      return combineLatest(this.items$, this.filterSearch$, this.filterActive$, this.filterPromo$).pipe(
        map(([shopArticle, filterString, filterActive, filterPromo]) => {
          // @ts-ignore
          return (shopArticle as Array).filter(
            item => item.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 &&
              this.activePromoFilter(filterActive, filterPromo, item));
        }),
      );
    }).then(filteredData => {
      this.filteredItemsListSubscription.next(filteredData);
    });
  }

  public async getData(param): Promise<any> {
    const resp = await fetch(this.retApiURL + param);
    return await resp.json();
  }

  private activePromoFilter(filterActive: boolean, filterPromo: boolean, item: ArticleData): boolean {
    let ruleForActive = true;
    let ruleForPromo = true;
    if (filterActive) {
      ruleForActive = item.active;
    }
    if (filterPromo) {
      ruleForPromo = item.promo;
    }
    return ruleForActive && ruleForPromo;
  }
}
