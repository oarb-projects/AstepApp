import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    loadChildren: () => import('./pages/recipebook/recipebook.module').then( m => m.RecipebookPageModule)
  },
  {
    path: 'phonebook',
    loadChildren: () => import('./pages/phonebook/phonebook.module').then( m => m.PhonebookPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notetaking/notetaking.module').then( m => m.NotetakingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
