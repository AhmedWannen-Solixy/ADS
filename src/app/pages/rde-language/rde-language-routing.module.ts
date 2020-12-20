import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdeLanguagePage } from './rde-language.page';

const routes: Routes = [
  {
    path: '',
    component: RdeLanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdeLanguagePageRoutingModule {}
