import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public formGroup!: FormGroup;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
      this.buildForm();
  }
  
  private buildForm(){
    const email = '';
    const password= '';
    this.formGroup = this._formBuilder.group({
      email: email.toLocaleLowerCase(),
      password:''
    });
  }

  login(){
    
  }

}
