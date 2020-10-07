import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from './modules/start-page/start-page.component';
import {SearchComponent} from './modules/search/search.component';

const routes: Routes = [
  {path: 'start-page', component: StartPageComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
