import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExportZonePage } from './export-zone.page';

const routes: Routes = [
  {
    path: '',
    component: ExportZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExportZonePageRoutingModule {}
