import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-inputs',
    imports: [FormsModule],
    templateUrl: './user-inputs.component.html',
    styleUrl: './user-inputs.component.css'
})
export class UserInputsComponent {

    initialInvestment = 0;
    annualInvestment = 0;
    expectedReturn = 0;
    durationTime = 0;

    onSubmit() {
        console.log(this.initialInvestment);
        console.log(this.annualInvestment);
        console.log(this.expectedReturn);
        console.log(this.durationTime);
    }
}
