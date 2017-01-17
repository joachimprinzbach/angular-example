import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Guten Morgen {{name}}</h1>`
})
export class AppComponent {
    name = 'Joachim';
}
