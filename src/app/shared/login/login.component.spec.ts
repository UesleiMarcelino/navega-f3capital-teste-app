import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMock } from './userMock';

import { LoginComponent } from './login.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formLogin: FormGroup
  const email = 'test@example.com'
  const cpf = '12345678910'
  const senha = 'navega123'

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [FormBuilder],
      imports: [ReactiveFormsModule]
    })
.compileComponents();
  });

    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form invalid when empty', () => {
    expect(component.formLogin.valid).toBeFalsy();
  });

  it('should form invalid', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.formLogin.valid).toBeFalsy();
    expect(component.submitted).toBeFalsy();
  });

  it('should login field validity', () => {
    let errors = {};
    let login = component.formLogin.controls['login'];
    errors = login.errors || {};
    expect(errors).toBeTruthy();
  });

  it('should submitted form whith user insert email', () => {
    expect(component.formLogin.valid).toBeFalsy();
    component.formLogin.controls['login'].setValue("test@example.com");
    component.formLogin.controls['senha'].setValue("navega123");
    expect(component.formLogin.valid).toBeTruthy();
    component.logar()
    let user = UserMock;
    expect(user.email).toBe("test@example.com");
    expect(user.senha).toBe("navega123");
    
  })

  it('should submitted form whith user insert CPF', () => {
    expect(component.formLogin.valid).toBeFalsy();
    component.formLogin.controls['login'].setValue("12345678910");
    component.formLogin.controls['senha'].setValue("navega123");
    expect(component.formLogin.valid).toBeTruthy();
    component.logar()
    let user = UserMock;
    expect(user.cpf).toBe("12345678910");
    expect(user.senha).toBe("navega123");
    
  })

  it('should submited login error and show message alert', () => {
    expect(component.formLogin.valid).toBeFalsy();
    component.formLogin.controls['login'].setValue("noemail@example.com");
    component.formLogin.controls['senha'].setValue("321");
    expect(component.formLogin.valid).toBeTruthy();
    component.logar()
    let user = UserMock;
    expect(user.email).toBe("test@example.com");
    expect(user.senha).toBe("navega123");
    expect(component.addMessages).toBeTruthy();
  })


  });
