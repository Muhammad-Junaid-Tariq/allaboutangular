import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingsComponent } from './propertybindings.component';

describe('PropertybindingsComponent', () => {
  let component: PropertybindingsComponent;
  let fixture: ComponentFixture<PropertybindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertybindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertybindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
