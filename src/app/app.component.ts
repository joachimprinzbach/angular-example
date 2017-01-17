import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                <my-greeting
                    [name]="name">
                </my-greeting>
                <my-user-input></my-user-input>
            `
})
export class AppComponent {
    name = 'Property Binding';
}
