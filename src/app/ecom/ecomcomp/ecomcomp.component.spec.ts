import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomcompComponent } from './ecomcomp.component';

describe('EcomcompComponent', () => {
  let component: EcomcompComponent;
  let fixture: ComponentFixture<EcomcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
