import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotetakingPage } from './notetaking.page';

const routes: Routes = [
  {
    path: '',
    component: NotetakingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotetakingPageRoutingModule {}
