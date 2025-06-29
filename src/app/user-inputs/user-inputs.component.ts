import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentResultsService } from '../investment-results/investment-results.service';

@Component({
    selector: 'app-user-inputs',
    imports: [FormsModule],
    templateUrl: './user-inputs.component.html',
    styleUrl: './user-inputs.component.css'
})
export class UserInputsComponent {

    private investmentService = inject(InvestmentResultsService) // <=> constructor(...)


    initialInvestment = 0;
    annualInvestment = 0;
    expectedReturn = 0;
    durationTime = 0;

    onSubmit() {
        this.investmentService.getUserInputs(this.initialInvestment,
            this.durationTime,
            this.annualInvestment,
            this.expectedReturn
        )
    }
}
