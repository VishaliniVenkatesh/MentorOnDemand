import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseForProposalsComponent } from './response-for-proposals.component';

describe('ResponseForProposalsComponent', () => {
  let component: ResponseForProposalsComponent;
  let fixture: ComponentFixture<ResponseForProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseForProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseForProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
