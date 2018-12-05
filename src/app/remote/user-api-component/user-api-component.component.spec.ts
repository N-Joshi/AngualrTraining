import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApiComponentComponent } from './user-api-component.component';

describe('UserApiComponentComponent', () => {
  let component: UserApiComponentComponent;
  let fixture: ComponentFixture<UserApiComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApiComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
