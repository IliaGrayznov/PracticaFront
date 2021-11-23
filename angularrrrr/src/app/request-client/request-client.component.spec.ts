import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestClientComponent } from './request-client.component';

describe('RequestClientComponent', () => {
  let component: RequestClientComponent;
  let fixture: ComponentFixture<RequestClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
