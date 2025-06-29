import { Component, inject } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';

@Component({
    selector: 'app-investment-results',
    imports: [],
    templateUrl: './investment-results.component.html',
    styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    tableHeads = ["Year", "Investment Value", "Interest Year", "Total Interest", "Invested Capital"]

    private investmentService = inject(InvestmentResultsService) // <=> constructor(...)



    get investmentResults() {
        return this.investmentService.getInvestmentResults();
    }
}
