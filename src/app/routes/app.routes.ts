import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppGridComponent } from '../components/layout/app-grid/app-grid.component';
import { AppWelcomeComponent } from '../components/app-welcome/app-welcome.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { EventPageComponent } from '../components/profile/organization/events/event/event-page/event-page.component';
import { AdminOrganizationComponent } from '../components/admin/admin-organization/admin-organization.component';

const app_Routes: Routes = [
  { path: 'home', component: AppWelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/event/:id', component: EventPageComponent },
  { path: 'admin/organization', component: AdminOrganizationComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
