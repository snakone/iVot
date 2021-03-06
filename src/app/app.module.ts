import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

// Components
import { AppWelcomeComponent } from './components/app-welcome/app-welcome.component';
import { IvotComponent } from './components/ivot/ivot.component';

// Vote
import { VoteComponent } from './components/vote/vote.component';

// Results
import { ResultsComponent } from './components/results/results.component';

// Profile
// Organization
import { ProfileComponent } from './components/profile/profile.component';
import { OrganizationCardComponent } from './components/profile/organization/organization-card/organization-card.component';

// User
import { UserCardComponent } from './components/profile/user/user-card/user-card.component';
import { RegisterUserComponent } from './components/profile/user/register-user/register-user.component';

// Participant
import { ParticipantComponent } from './components/profile/organization/events/event/event-page/participant/participant.component';
import { ParticipantTableComponent } from './components/profile/organization/events/event/event-page/participant/participant-table/participant-table.component';

// Events
import { EventsComponent } from './components/profile/organization/events/events.component';
import { EventComponent } from './components/profile/organization/events/event/event.component';
import { EventPageComponent } from './components/profile/organization/events/event/event-page/event-page.component';

// Topics
import { TopicComponent } from './components/profile/organization/events/event/event-page/topic/topic.component';
import { OptionsComponent } from './components/profile/organization/events/event/event-page/topic/options/options.component';
import { OptionTableComponent } from './components/profile/organization/events/event/event-page/topic/options/option-table/option-table.component';

// Static
import { CreateEventComponent } from './components/static/create-event/create-event.component';
import { CreateTopicComponent } from './components/static/create-topic/create-topic.component';
import { CreateOptionComponent } from './components/static/create-option/create-option.component';
import { CreateUserComponent } from './components/static/create-user/create-user.component';
import { ConfirmComponent } from './components/static/confirm/confirm.component';
import { InviteParticipantComponent } from './components/static/invite-participant/invite-participant.component';
import { EditEventComponent } from './components/static/edit-event/edit-event.component';
import { EditTopicComponent } from './components/static/edit-topic/edit-topic.component';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

// app_routes
import { AppRoutingModule } from './routes/app.routes';

// Toaster
import { ToastrModule } from 'ngx-toastr';
import { VoteTopicComponent } from './components/vote/vote-topic/vote-topic.component';
import { VoteOptionsComponent } from './components/vote/vote-options/vote-options.component';


@NgModule({
  declarations: [
    AppComponent, TopNavComponent, AppGridComponent, TopMenuComponent,
    TopTitleComponent, AppWelcomeComponent, CreateEventComponent,
    ProfileComponent, EventsComponent, EventComponent, TopicComponent,
    EventPageComponent, CreateTopicComponent, OptionsComponent,
    FooterNavComponent, AdminOrganizationComponent, OrganizationCardComponent,
    ConfirmComponent, CreateOptionComponent, OptionTableComponent,
    InviteParticipantComponent, RegisterUserComponent, UserCardComponent,
    ParticipantComponent, ParticipantTableComponent, CreateUserComponent,
    IvotComponent, EditEventComponent, EditTopicComponent, ResultsComponent,
    VoteComponent,
    VoteTopicComponent,
    VoteOptionsComponent],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule,
    MaterialModule, NgxPaginationModule, FormsModule,
    ReactiveFormsModule, AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true
    })
  ],
  entryComponents:[CreateTopicComponent, CreateEventComponent, CreateOptionComponent,
                   CreateUserComponent, ConfirmComponent, InviteParticipantComponent,
                   EditEventComponent, EditTopicComponent], // Modals
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
