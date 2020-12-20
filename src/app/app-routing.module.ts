import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/languages/languages.module').then( m => m.LanguagesPageModule)
  },
  {
    path: 'directions',
    loadChildren: () => import('./pages/directions/directions.module').then( m => m.DirectionsPageModule)
  },
  {
    path: 'chauffeur-menu',
    loadChildren: () => import('./pages/chauffeur-menu/chauffeur-menu.module').then( m => m.ChauffeurMenuPageModule)
  },
  {
    path: 'export-zone',
    loadChildren: () => import('./pages/export-zone/export-zone.module').then( m => m.ExportZonePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rde-menu',
    loadChildren: () => import('./pages/rde-menu/rde-menu.module').then( m => m.RdeMenuPageModule)
  },
  {
    path: 'rde-language',
    loadChildren: () => import('./pages/rde-language/rde-language.module').then( m => m.RdeLanguagePageModule)
  },
  

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
