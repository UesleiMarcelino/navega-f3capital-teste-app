import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserMock } from './userMock';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  submitted = false;
  submittedMessage = false;
  fieldTextType: boolean;
  messages: any
  userMock = UserMock
  msgs2: Message[];

  constructor(private fb: FormBuilder, private router: Router,) {
  }

  ngOnInit(): void {
    this.criarForm()
  }


  criarForm() {
    this.formLogin = this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  logar() {
    if (this.formLogin.valid) {
      let login = this.formLogin.get('login')?.value
      let senha = this.formLogin.get('senha')?.value
      
      if (login === this.userMock.email || login === this.userMock.cpf && senha === this.userMock.senha) {
        this.router.navigate(['/home']);
      } else {
        this.addMessages()
      }
    } else {
      this.submitted = true;
    }

  }

  addMessages() {
    this.msgs2 = [
      { severity: 'error', summary: 'Email/CPF ou senha estão incorretos!' }
    ];
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }



}
