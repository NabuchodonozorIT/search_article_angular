import {ComponentFixture, TestBed, tick} from '@angular/core/testing';
import {ItemSearchFormComponent} from './item-search-form.component';
import {By} from '@angular/platform-browser';

describe('ItemSearchFormComponent', () => {
  let component: ItemSearchFormComponent;
  let fixture: ComponentFixture<ItemSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemSearchFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filter search is empty', () => {
    expect(component.filterSearch.value).toEqual('');
  });

  it('filter active is false', () => {
    expect(component.filterActive.value).toEqual(false);
  });

  it('filter promo is false', () => {
    expect(component.filterPromo.value).toEqual(false);
  });

});
