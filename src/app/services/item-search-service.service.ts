import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemSearchService {

  constructor() {
  }

  private retApiURL = 'https://join-tsh-api-staging.herokuapp.com/';

  public async getData(param): Promise<any> {
    const resp = await fetch(this.retApiURL + param);
    const data = await resp.json();
    return data.items;
  }
}
