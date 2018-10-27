import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteParticipantComponent } from './invite-participant.component';

describe('InviteParticipantComponent', () => {
  let component: InviteParticipantComponent;
  let fixture: ComponentFixture<InviteParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
