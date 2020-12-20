import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExportZonePageRoutingModule } from './export-zone-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExportZonePage } from './export-zone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExportZonePageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [ExportZonePage]
})
export class ExportZonePageModule {}
