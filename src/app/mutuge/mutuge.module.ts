import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MpesaComponent } from './mpesa/mpesa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule,NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    MpesaComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ]
})
export class MutugeModule { }
