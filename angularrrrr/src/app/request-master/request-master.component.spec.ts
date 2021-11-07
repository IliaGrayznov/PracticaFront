import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMasterComponent } from './request-master.component';

describe('RequestMasterComponent', () => {
  let component: RequestMasterComponent;
  let fixture: ComponentFixture<RequestMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
