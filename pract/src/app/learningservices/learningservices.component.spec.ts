import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningservicesComponent } from './learningservices.component';

describe('LearningservicesComponent', () => {
  let component: LearningservicesComponent;
  let fixture: ComponentFixture<LearningservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
