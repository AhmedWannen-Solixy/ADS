import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectionsPageRoutingModule } from './directions-routing.module';

import { DirectionsPage } from './directions.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectionsPageRoutingModule,
    TranslateModule,
  ],
  declarations: [DirectionsPage]
})
export class DirectionsPageModule {}
