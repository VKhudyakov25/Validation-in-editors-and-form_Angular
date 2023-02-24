import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isChecked: boolean;
  firstName: string;
  lastName: string;

  person = {
    firstName: '',
    lastName: '',
  };

  constructor() {
    this.isChecked = false;
    this.customCallback = this.customCallback.bind(this);
  }

  validate(params: any) {
    let result = params.validationGroup.validate();
    if (result.isValid) {
      alert('Validation checked');
      this.firstName = '';
      this.lastName = '';
    }
  }

  customCallback(e: any) {
    console.log(this.isChecked);
    return this.isChecked ? !!e.value : true;
  }

  toggleCheck(e: any) {
    this.isChecked = !this.isChecked;
  }

  submitButtonOptions = {
    text: 'Submit',
    useSubmitBehavior: true,
  };

  handleSubmit(e: any) {
    console.log(e);
    alert('Form checked');
    e.preventDefault();
  }
}
