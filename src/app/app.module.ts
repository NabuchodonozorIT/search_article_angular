import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemSearchComponent} from './components/item-search/item-search.component';
import {ItemSearchFormComponent} from './components/item-search-form/item-search-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemSearchService} from './services/item-search-service.service';
import {ItemListComponent} from './components/item-list/item-list.component';
import {ItemCardComponent} from './components/item-card/item-card.component';
import {NavBarComponent} from './modules/nav-bar/nav-bar.component';
import {StarRatingComponent} from './components/star-rating/star-rating.component';
import {PromoComponent} from './components/promo/promo.component';
import {PaginationComponent} from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchComponent,
    ItemSearchFormComponent,
    ItemListComponent,
    ItemCardComponent,
    NavBarComponent,
    StarRatingComponent,
    PromoComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ItemSearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
