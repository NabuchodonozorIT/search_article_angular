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

  public latestData: ArticleData[];

  private retApiURL = 'https://join-tsh-api-staging.herokuapp.com/';
  private filter$: Observable<string>;
  private items$: Observable<Observable<ArticleData[]>>;

  public searchData(filter: any, param: string): void {
    this.getData(param).then((data) => {
      return data;
    }).then(items => {
      this.items$ = of(items);
      this.filter$ = filter.valueChanges.pipe(startWith('Gorgeous Wooden'));
      return combineLatest(this.items$, this.filter$).pipe(
        // tslint:disable-next-line:no-shadowed-variable
        map(([items, filterString]) => {
          return items['filter'](
            item => item.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1);
        }),
      );
    }).then(filteredData => {
      this.filteredItemsListSubscription.next(filteredData);
    });
  }

  public async getData(param): Promise<any> {
    const resp = await fetch(this.retApiURL + param);
    const data = await resp.json();
    this.latestData = data.items;
    return this.latestData;
  }
}
