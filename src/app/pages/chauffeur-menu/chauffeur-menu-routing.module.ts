import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChauffeurMenuPage } from './chauffeur-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ChauffeurMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChauffeurMenuPageRoutingModule {}
