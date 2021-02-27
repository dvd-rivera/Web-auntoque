import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAyudaComponent } from './login-ayuda.component';

describe('LoginAyudaComponent', () => {
  let component: LoginAyudaComponent;
  let fixture: ComponentFixture<LoginAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAyudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
