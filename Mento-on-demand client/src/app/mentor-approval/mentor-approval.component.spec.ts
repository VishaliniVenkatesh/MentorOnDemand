import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorApprovalComponent } from './mentor-approval.component';

describe('MentorApprovalComponent', () => {
  let component: MentorApprovalComponent;
  let fixture: ComponentFixture<MentorApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
