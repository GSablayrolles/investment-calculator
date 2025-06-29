import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, UserInputsComponent, InvestmentResultsComponent],
    templateUrl: './app.component.html',
})
export class AppComponent { }
