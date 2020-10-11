import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowDetailsComponent} from './show-details.component';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

describe('ShowDetailsComponent', () => {
  let component: ShowDetailsComponent;
  let fixture: ComponentFixture<ShowDetailsComponent>;

  beforeEach(async () => {
    const model = {
      active: true,
      description: 'Eos cum doloremque reprehenderit consequatur modi veritatis.',
      id: 1,
      image: '',
      name: 'Handmade Cotton Towels',
      promo: true,
      rating: 4
    };
    await TestBed.configureTestingModule({
      declarations: [ShowDetailsComponent],
      imports: [
        MatDialogModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: model
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
