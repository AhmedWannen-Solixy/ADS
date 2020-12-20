import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdeMenuPageRoutingModule } from './rde-menu-routing.module';

import { RdeMenuPage } from './rde-menu.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdeMenuPageRoutingModule,
    TranslateModule
  ],
  declarations: [RdeMenuPage]
})
export class RdeMenuPageModule {}
