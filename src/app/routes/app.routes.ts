import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppGridComponent } from '../components/layout/app-grid/app-grid.component';
import { AppWelcomeComponent } from '../components/app-welcome/app-welcome.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { PollsComponent } from '../components/profile/entity/events/event/polls/polls.component';
import { EntityRegisterComponent } from '../components/entity-register/entity-register.component';
import { AdminEntityComponent } from '../components/admin/admin-entity/admin-entity.component';


const app_Routes: Routes = [
  { path: 'home', component: AppWelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: PollsComponent },
  { path: 'entity-register', component: EntityRegisterComponent },
  { path: 'admin/entity', component: AdminEntityComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(app_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
