import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChauffeurMenu2Page } from './chauffeur-menu2.page';

const routes: Routes = [
  {
    path: '',
    component: ChauffeurMenu2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChauffeurMenu2PageRoutingModule {}
