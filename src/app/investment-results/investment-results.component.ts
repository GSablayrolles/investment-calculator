import { Component, inject } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-investment-results',
    imports: [CurrencyPipe],
    templateUrl: './investment-results.component.html',
    styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    tableHeads = ["Year",
        "Investment Value",
        "Interest Year",
        "Total Interest",
        "Invested Capital"
    ]

    private investmentService = inject(InvestmentResultsService)

    get investmentResults() {
        console.log(this.investmentService.getInvestmentResults())
        return this.investmentService.getInvestmentResults();
    }


}
