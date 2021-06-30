import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[numbersInput]',
  })
  export class InputDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
  }