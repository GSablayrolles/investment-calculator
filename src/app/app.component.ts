import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputsComponent } from './user-inputs/user-inputs.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, UserInputsComponent],
    templateUrl: './app.component.html',
})
export class AppComponent { }
