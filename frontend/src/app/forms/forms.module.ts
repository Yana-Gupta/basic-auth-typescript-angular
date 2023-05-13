import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    FormComponent
  ]
})
export class FormsModule { }
