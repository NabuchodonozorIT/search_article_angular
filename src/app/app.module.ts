import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemSearchFormComponent} from './components/item-search-form/item-search-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ItemSearchService} from './services/item-search-service.service';
import {ItemListComponent} from './components/item-list/item-list.component';
import {ItemCardComponent} from './components/item-card/item-card.component';
import {NavBarComponent} from './modules/nav-bar/nav-bar.component';
import {StarRatingComponent} from './components/star-rating/star-rating.component';
import {PromoComponent} from './components/promo/promo.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {ShowDetailsComponent} from './components/show-details/show-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DialogService} from './services/dialog.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmptyListComponent } from './components/empty-list/empty-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchFormComponent,
    ItemListComponent,
    ItemCardComponent,
    NavBarComponent,
    StarRatingComponent,
    PromoComponent,
    PaginationComponent,
    ShowDetailsComponent,
    EmptyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [ItemSearchService,
    DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
