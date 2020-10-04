import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemSearchComponent} from './modules/item-search/item-search.component';
import {ItemSearchFormComponent} from './modules/item-search-form/item-search-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemSearchService} from './services/item-search-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemSearchComponent,
    ItemSearchFormComponent
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
