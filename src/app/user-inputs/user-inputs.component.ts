import { Component } from '@angular/core';

@Component({
    selector: 'app-user-inputs',
    imports: [],
    templateUrl: './user-inputs.component.html',
    styleUrl: './user-inputs.component.css'
})
export class UserInputsComponent {

    onSubmit() {
        alert("INPUTED")
    }
}
