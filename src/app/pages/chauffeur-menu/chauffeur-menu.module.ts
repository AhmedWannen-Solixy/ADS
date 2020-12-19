import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChauffeurMenuPageRoutingModule } from './chauffeur-menu-routing.module';

import { ChauffeurMenuPage } from './chauffeur-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChauffeurMenuPageRoutingModule
  ],
  declarations: [ChauffeurMenuPage]
})
export class ChauffeurMenuPageModule {}
