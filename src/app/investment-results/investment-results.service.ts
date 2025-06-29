import { Injectable } from "@angular/core";
import { AnnualData } from "./investment.model";

@Injectable({ providedIn: "root" })
export class InvestmentResultsService {

    private initialInvestment = 0;
    private duration = 0;
    private annualInvestment = 0;
    private expectedReturn = 0;
    private annualData!: AnnualData[]

    constructor() {
        this.calculateInvestmentResults();
    }

    private calculateInvestmentResults() {
        const annualData = [];
        let investmentValue = this.initialInvestment;

        for (let i = 0; i < this.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
            investmentValue += interestEarnedInYear + this.annualInvestment;
            const totalInterest =
                investmentValue - this.annualInvestment * year - this.initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: this.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
            });
        }

        this.annualData = annualData;
    }

    getUserInputs(data: { initInv: number, dur: number, annInv: number, expRet: number }) {
        this.initialInvestment = data.initInv;
        this.duration = data.dur;
        this.annualInvestment = data.annInv;
        this.expectedReturn = data.expRet;

        this.calculateInvestmentResults();
    }

    getInvestmentResults() {
        return this.annualData;
    }

}