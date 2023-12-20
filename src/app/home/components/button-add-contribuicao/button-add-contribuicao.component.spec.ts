import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddContribuicaoComponent } from './button-add-contribuicao.component';

describe('ButtonAddContribuicaoComponent', () => {
  let component: ButtonAddContribuicaoComponent;
  let fixture: ComponentFixture<ButtonAddContribuicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAddContribuicaoComponent]
    });
    fixture = TestBed.createComponent(ButtonAddContribuicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
