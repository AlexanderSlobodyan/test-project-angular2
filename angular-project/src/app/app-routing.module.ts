import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTableComponent } from './list-table/list-table.component';

const routes: Routes = [
  { path: '', component: ListTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
