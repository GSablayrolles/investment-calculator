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


    initialInvestment = "1000";
    annualInvestment = "100";
    expectedReturn = "5";
    durationTime = "10";

    onSubmit() {
        this.investmentService.getUserInputs({
            initInv: +this.initialInvestment,
            dur: +this.durationTime,
            annInv: +this.annualInvestment,
            expRet: +this.expectedReturn
        }
        )

        console.log(this.investmentService.getInvestmentResults())
    }
}
