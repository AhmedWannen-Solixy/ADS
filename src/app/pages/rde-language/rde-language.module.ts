import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdeLanguagePageRoutingModule } from './rde-language-routing.module';

import { RdeLanguagePage } from './rde-language.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdeLanguagePageRoutingModule
  ],
  declarations: [RdeLanguagePage]
})
export class RdeLanguagePageModule {}
