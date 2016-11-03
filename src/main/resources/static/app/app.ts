import { Component, NgModule } from '@angular/core'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser'

import { ColorSample } from './color-sample.component'
@Component({
    selector: 'my-app',
    template: `
  <color-changer></color-changer>
    `
})
export class App{
    color: string;
}

@NgModule({
    declarations: [App, ColorSample],
    imports: [BrowserModule],
    bootstrap: [App]

})
export class AppModule {

}


const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);