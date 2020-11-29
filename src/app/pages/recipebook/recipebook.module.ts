import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipebookPageRoutingModule } from './recipebook-routing.module';

import { RecipebookPage } from './recipebook.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RecipebookPageRoutingModule
  ],
  declarations: [RecipebookPage]
})
export class RecipebookPageModule {}
