import { Component } from '@angular/core';
import { MpesaService } from '../../services/mpesa.service';
import { FormBuilder,FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms'; 

@Component({
  selector: 'app-mpesa',
  templateUrl: './mpesa.component.html',
  styleUrl: './mpesa.component.css'
})
export class MpesaComponent {
  amount!: string;
  phone!: string;

  mpesaForm:FormGroup;

  constructor(private stkInitiateService: MpesaService){ 
    this.mpesaForm=new FormGroup({
     amountFormControl : new FormControl('', [Validators.required]),
     phoneFormControl : new FormControl('', [Validators.required, this.phoneValidator])
    });
  }
  



 phoneValidator(control: FormControl): {[key: string]: any} | null {
  const phonePattern = /^254\d{9}$/;
  const isValid = phonePattern.test(control.value);
  console.log('Phone validation result:', isValid);
  if (isValid) {
    return null;
  } else {
    return { 'invalidPhone': true };
  }
}


  initiateSTK(): void {
      this.stkInitiateService.initiateSTK(this.amount, this.phone)
        .subscribe(response => {
          // Handle the response here
          console.log(response);
        });
   
  }
}

