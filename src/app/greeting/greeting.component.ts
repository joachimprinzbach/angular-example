import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-greeting',
    template: `
                <h1>Guten Morgen {{name}}</h1>
              `
})
export class GreetingComponent {

    @Input()
    name: string;
}
