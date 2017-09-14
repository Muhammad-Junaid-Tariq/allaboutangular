import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondpropertbindComponent } from './secondpropertbind.component';

describe('SecondpropertbindComponent', () => {
  let component: SecondpropertbindComponent;
  let fixture: ComponentFixture<SecondpropertbindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondpropertbindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondpropertbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
