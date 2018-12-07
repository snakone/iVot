import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTopicComponent } from './vote-topic.component';

describe('VoteTopicComponent', () => {
  let component: VoteTopicComponent;
  let fixture: ComponentFixture<VoteTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
