import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntityComponent } from './admin-entity.component';

describe('AdminEntityComponent', () => {
  let component: AdminEntityComponent;
  let fixture: ComponentFixture<AdminEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
