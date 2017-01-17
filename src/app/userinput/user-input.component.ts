import {Component} from "@angular/core";

@Component({
    selector: 'my-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {

    placeholder: string = 'Schreib was rein';
}