import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDataComponent } from './remote-data.component';

describe('RemoteDataComponent', () => {
  let component: RemoteDataComponent;
  let fixture: ComponentFixture<RemoteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
