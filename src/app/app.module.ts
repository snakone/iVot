import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material Module
import { MaterialModule } from './modules/material';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
// Layout
import { AppGridComponent } from './components/layout/app-grid/app-grid.component';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { TopMenuComponent } from './components/layout/top-menu/top-menu.component';
import { TopTitleComponent } from './components/layout/top-title/top-title.component';
import { FooterNavComponent } from './components/layout/footer-nav/footer-nav.component';

// Admin
import { AdminOrganizationComponent } from './components/admin/admin-organization/admin-organization.component';

// Dynamic Components
import { AppWelcomeComponent } from './components/app-welcome/app-welcome.component';

// Profile
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileCardComponent } from './components/profile/profile-card/profile-card.component';

// Events
import { EventsComponent } from './components/profile/organization/events/events.component';
import { EventComponent } from './components/profile/organization/events/event/event.component';
import { CreateEventComponent } from './components/profile/organization/create-event/create-event.component';

// Topics
import { TopicComponent } from './components/profile/organization/events/event/topics/topic/topic.component';
import { TopicsComponent } from './components/profile/organization/events/event/topics/topics.component';
import { CreateTopicComponent } from './components/profile/organization/events/event/create-topic/create-topic.component';
import { OptionsComponent } from './components/profile/organization/events/event/topics/topic/options/options.component';

import { NgxPaginationModule } from 'ngx-pagination';

// app_routes
import { AppRoutingModule } from './routes/app.routes';

// Toaster
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent, TopNavComponent, AppGridComponent, TopMenuComponent,
    TopTitleComponent, AppWelcomeComponent, CreateEventComponent,
    ProfileComponent, EventsComponent, EventComponent, TopicComponent,
    TopicsComponent, CreateTopicComponent, OptionsComponent,
    FooterNavComponent, AdminOrganizationComponent, ProfileCardComponent],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule,
    MaterialModule, NgxPaginationModule,FormsModule,
    ReactiveFormsModule, AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true
    })
  ],

  entryComponents:[CreateTopicComponent, CreateEventComponent], // Modals
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
