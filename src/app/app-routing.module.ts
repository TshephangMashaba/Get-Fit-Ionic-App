import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'program-listing',
    loadChildren: () => import('./program-listing/program-listing.module').then( m => m.ProgramListingPageModule)
  },
  {
    path: 'agility-boost',
    loadChildren: () => import('./Program-Details/agility-boost/agility-boost.module').then( m => m.AgilityBoostPageModule)
  },
  {
    path: 'agility-boost-status',
    loadChildren: () => import('./Program-Status/agility-boost-status/agility-boost-status.module').then( m => m.AgilityBoostStatusPageModule)
  },  {
    path: 'recovery-flow',
    loadChildren: () => import('./Program-Details/recovery-flow/recovery-flow.module').then( m => m.RecoveryFlowPageModule)
  },
  {
    path: 'beast-mode',
    loadChildren: () => import('./Program-Details/beast-mode/beast-mode.module').then( m => m.BeastModePageModule)
  },
  {
    path: 'beast-mode-status',
    loadChildren: () => import('./Program-Status/beast-mode-status/beast-mode-status.module').then( m => m.BeastModeStatusPageModule)
  },
  {
    path: 'recovery-flow-status',
    loadChildren: () => import('./Program-Status/recovery-flow-status/recovery-flow-status.module').then( m => m.RecoveryFlowStatusPageModule)
  },
  {
    path: 'workout-progress-page',
    loadChildren: () => import('./workout-progress-page/workout-progress-page.module').then( m => m.WorkoutProgressPagePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }