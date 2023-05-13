import { TemplateBinding } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent {

  emailInput: any = ""
  passwordInput: any = ""

 

  async onSubmit(email: any, password: any) {

    const response = await fetch("http://localhost:4000/api/user", {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    console.log(response)
  }
}
