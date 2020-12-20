import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdeMenuPage } from './rde-menu.page';

const routes: Routes = [
  {
    path: '',
    component: RdeMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdeMenuPageRoutingModule {}
