import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionayAgeComponentComponent} from "./dictionay-age-component/dictionay-age-component.component";
import {DictionaryDetailComponentComponent} from "./dictionary-detail-component/dictionary-detail-component.component";

const routes: Routes = [
  {path:"dictionary",component: DictionayAgeComponentComponent},
  {path:"dictionary/detail/:word",component: DictionaryDetailComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
