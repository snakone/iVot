import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteOptionsComponent } from './vote-options.component';

describe('VoteOptionsComponent', () => {
  let component: VoteOptionsComponent;
  let fixture: ComponentFixture<VoteOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
