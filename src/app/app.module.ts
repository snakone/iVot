import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Animations

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material Module

import { MaterialModule } from './modules/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Components
// Layout

import { AppGridComponent } from './components/layout/app-grid/app-grid.component';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { TopMenuComponent } from './components/layout/top-menu/top-menu.component';
import { TopTitleComponent } from './components/layout/top-title/top-title.component';


// Dinamic Components

import { AppWelcomeComponent } from './components/app-welcome/app-welcome.component';

import { NgxPaginationModule } from 'ngx-pagination';

// app_routes

import { AppRoutingModule } from './routes/app.routes';

// Toaster

import { ToastrModule } from 'ngx-toastr';

import { CreateEventComponent } from './components/profile/entity/create-event/create-event.component';
import { ProfileComponent } from './components/profile/profile.component';

import { environment } from '../environments/environment';
import { EntityRegisterComponent } from './components/entity-register/entity-register.component';
import { EventsComponent } from './components/profile/entity/events/events.component';
import { EntityComponent } from './components/profile/entity/entity.component';
import { EventComponent } from './components/profile/entity/events/event/event.component';
import { PollComponent } from './components/profile/entity/events/event/polls/poll/poll.component';
import { PollsComponent } from './components/profile/entity/events/event/polls/polls.component';
import { CreatePollComponent } from './components/profile/entity/events/event/create-poll/create-poll.component';
import { QuestionsComponent } from './components/profile/entity/events/event/polls/poll/questions/questions.component';
import { FooterNavComponent } from './components/layout/footer-nav/footer-nav.component';
import { AdminEntityComponent } from './components/admin/admin-entity/admin-entity.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    AppGridComponent,
    TopMenuComponent,
    TopTitleComponent,
    AppWelcomeComponent,
    CreateEventComponent,
    ProfileComponent,
    EntityRegisterComponent,
    EventsComponent,
    EventComponent,
    PollComponent,
    PollsComponent,
    CreatePollComponent,
    QuestionsComponent,
    EntityComponent,
    FooterNavComponent,
    AdminEntityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
