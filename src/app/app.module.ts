import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UserInputComponent} from "./userinput/user-input.component";
import {GreetingComponent} from "./greeting/greeting.component";

@NgModule({
    declarations: [
        AppComponent,
        GreetingComponent,
        UserInputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
