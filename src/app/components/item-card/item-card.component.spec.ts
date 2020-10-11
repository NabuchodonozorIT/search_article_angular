import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardComponent } from './item-card.component';
import {ItemSearchService} from '../../services/item-search-service.service';
import {DialogService} from '../../services/dialog.service';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  let fixture: ComponentFixture<ItemCardComponent>;
  let dialogSpy: jasmine.Spy;
  const dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' };

  const dialogService = new DialogService(null);
  const itemSearchService = new ItemSearchService();

  // beforeEach(async () => {
  //   dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
  //   await TestBed.configureTestingModule({
  //     declarations: [ ItemCardComponent ],
  //     providers: [
  //       itemSearchService,
  //       dialogService
  //     ]
  //   })
  //   .compileComponents();
  // });
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ItemCardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
