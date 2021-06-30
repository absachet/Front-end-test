import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[resultsInput]',
  })
  export class ResultDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
  }