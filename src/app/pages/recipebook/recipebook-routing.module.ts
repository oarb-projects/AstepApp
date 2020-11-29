import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipebookPage } from './recipebook.page';

const routes: Routes = [
  {
    path: '',
    component: RecipebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipebookPageRoutingModule {}
