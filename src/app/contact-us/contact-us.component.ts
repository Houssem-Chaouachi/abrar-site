import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
contactUsForm: FormGroup;
submitted = false;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required && Validators.email]],
      tel: ['', [Validators.required && Validators.minLength(8)]],
      msg: ['', [Validators.required]]
    });
  }
  get form() {
    return this.contactUsForm.controls;
  }

onsubmit(): void {
  this.submitted = true;
  if (this.contactUsForm.invalid){
    return;
  }
}
}
