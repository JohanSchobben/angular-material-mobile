import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMobileComponent } from './ngx-mobile.component';

describe('NgxMobileComponent', () => {
  let component: NgxMobileComponent;
  let fixture: ComponentFixture<NgxMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
