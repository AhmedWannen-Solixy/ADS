import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChauffeurMenu2PageRoutingModule } from './chauffeur-menu2-routing.module';

import { ChauffeurMenu2Page } from './chauffeur-menu2.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChauffeurMenu2PageRoutingModule,
    TranslateModule
  ],
  declarations: [ChauffeurMenu2Page]
})
export class ChauffeurMenu2PageModule {}
