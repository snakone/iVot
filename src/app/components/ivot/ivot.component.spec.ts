import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvotComponent } from './ivot.component';

describe('IvotComponent', () => {
  let component: IvotComponent;
  let fixture: ComponentFixture<IvotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
