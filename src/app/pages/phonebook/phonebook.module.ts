import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhonebookPageRoutingModule } from './phonebook-routing.module';

import { PhonebookPage } from './phonebook.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PhonebookPageRoutingModule
  ],
  declarations: [PhonebookPage]
})
export class PhonebookPageModule {}
