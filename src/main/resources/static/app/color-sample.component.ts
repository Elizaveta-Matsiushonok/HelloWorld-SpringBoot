import { Component, Input } from '@angular/core'

@Component({
    selector: 'color-changer',
    template: `  
     <div class="color-change"  [ngStyle]="{'color': color}">
      <h1>Hello World</h1>
     <button (click)="changeColor()">Change</button>
      </div>
      `,
      styles: [`
      .color-change {
        color: "black";
    }
    `] 
})
export class ColorSample{
   
    @Input()   
    color: string;
 
 changeColor(){
     let r = Math.floor(Math.random()*255) + 1;
     let g = Math.floor(Math.random()*255) + 1;
     let b = Math.floor(Math.random()*255) + 1;
     this.color= 'rgb(' + r + ',' + g + ',' + b + ')';
 }
 
 
}
