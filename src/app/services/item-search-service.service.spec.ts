import {TestBed} from '@angular/core/testing';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {ItemSearchService} from './item-search-service.service';


describe('ItemSearchService', () => {
  let service: ItemSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should provide data for the first article', () => {
  //
  //   const mock = new MockAdapter(axios);
  //   const data = {response: true};
  //   mock.onGet('https://join-tsh-api-staging.herokuapp.com/').reply(200, data);
  //
  //   service.getData('1').then(response => {
  //     expect(response).toEqual(data);
  //   });
  // });
});
