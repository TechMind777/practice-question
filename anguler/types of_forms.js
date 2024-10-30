/**12. What are the types of forms available in Angular ? Explain with syntax.
 * 
In Angular, there are different types of forms available for handling user input and performing validation. The two main types of forms in Angular are Template-driven forms and Reactive forms.

Template-driven Forms: — Template-driven forms are primarily defined within the HTML template of the component using Angular directives. — The form controls and validation rules are inferred from the template, reducing the need for explicit form control declaration in the component code. — Template-driven forms are suitable for simple forms with basic validation requirements.
Syntax:
 <form #myform="ngForm" (ngsubmit)="onSubmit()">
     <label for="name">Name:</label>
     <input type="text" id="name" name="name" ngmodel="" required="">
     
     <label for="email">Email:</label>
     <input type="email" id="email" name="email" ngmodel="" required="" email="">
     
     <button type="submit">Submit</button>
   </form>
In the example above, ngForm is a directive that represents the entire form. Each input element uses the ngModel directive for two-way data binding and includes additional directives like required and email for validation.

2. Reactive Forms: —
Reactive forms are created programmatically in the component class using TypeScript. — Form controls are explicitly defined in the component code, providing more control and flexibility. — Reactive forms are suitable for complex forms with dynamic validation requirements and advanced interactivity.
Syntax:
 import { Component, OnInit } from '@angular/core';
   import { FormGroup, FormControl, Validators } from '@angular/forms';

   @Component({
     selector: 'app-my-form',
     template: `
       <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
         <label for="name">Name:</label>
         <input type="text" id="name" formControlName="name">
         
         <label for="email">Email:</label>
         <input type="email" id="email" formControlName="email">
         
         <button type="submit">Submit</button>
       </form>
     `,
   })
   export class MyFormComponent implements OnInit {
     myForm: FormGroup;

     ngOnInit() {
       this.myForm = new FormGroup({
         name: new FormControl('', Validators.required),
         email: new FormControl('', [Validators.required, Validators.email]),
       });
     }

     onSubmit() {
       if (this.myForm.valid) {
         // Handle form submission
       }
     }
   }
In the example above, FormGroup represents the entire form, while FormControl represents individual form controls. Validators are applied to each form control to define validation rules.
Conclusion:
These are the main types of forms available in Angular: Template-driven forms and Reactive forms. Depending on the complexity and requirements of your form, you can choose the appropriate form type for your Angular application.

*/