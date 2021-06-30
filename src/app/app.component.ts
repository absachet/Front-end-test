import { Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { InputDirective } from './app.directives/input.directive';
import { ResultDirective } from './app.directives/result.directive';
import { InputComponent } from './components/input/input.component';
import { Globals } from './services/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  @Input() inputs: InputComponent[] = [];
  @ViewChild(InputDirective, { static: true }) inputsDiv!: InputDirective;
  @ViewChild(ResultDirective, { static: true }) resultsDiv!: ResultDirective;

  private values: string[] = [];
  public target: string = "";

  constructor(public globals: Globals, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.addInput(1);
    this.addInput(2);
  }

  ngOnDestroy() {

  }

  addInput(index: number) {
    this.values.push("");
    const lenght = this.values.length - 1;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InputComponent);

    const viewContainerRef = this.inputsDiv.viewContainerRef;

    const componentRef = viewContainerRef.createComponent<InputComponent>(componentFactory);
    componentRef.instance.label = index + "° número";
    componentRef.instance.outputValue.subscribe(o => this.values[lenght] = o);
  }

  getTarget(val: string) {
    this.target = val;
  }

  addNewInput(event: any) {
    this.values.push("");
    const lenght = this.values.length - 1;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InputComponent);

    const viewContainerRef = this.inputsDiv.viewContainerRef;

    const componentRef = viewContainerRef.createComponent<InputComponent>(componentFactory);
    componentRef.instance.label = lenght + 1 + "° número";
    componentRef.instance.outputValue.subscribe(o => this.values[lenght] = o);
  }

  combineFields(event: any) {
    this.resultsDiv.viewContainerRef.clear();
    let valOrdered = this.values.map(v => parseFloat(v)).sort((n1, n2) => n1 - n2).filter(n => !isNaN(n) && n > 0);
    let targetNum = parseFloat(this.target);
    let solution = [];

    if (valOrdered.length == 0) {
      alert("Insira uma sequência com números maiores que 0");
      return;
    }

    if (isNaN(targetNum) || targetNum <= 0) {
      alert("Insira um target maior que 0");
      return;
    }

    let index = valOrdered.length - 1;

    while (targetNum > 0 && index >= 0) {
      while (targetNum >= valOrdered[index]) {
        targetNum -= valOrdered[index]
        solution.push(valOrdered[index]);
      }
      index--;
    }

    if (targetNum > 0) {
      alert("Sem combinações possíveis");
      return;
    }

    let solOrdered = solution.sort((n1, n2) => n1 - n2);

    for (let s of solOrdered) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InputComponent);

      const viewContainerRef = this.resultsDiv.viewContainerRef;

      const componentRef = viewContainerRef.createComponent<InputComponent>(componentFactory);
      componentRef.instance.disabled = true;
      componentRef.instance.inputValue = s.toString();
    }
  }

  clearFields(event: any) {
    this.inputsDiv.viewContainerRef.clear();
    this.resultsDiv.viewContainerRef.clear();
    this.values = [];
    this.addInput(1);
    this.addInput(2);
    this.target = "";
  }
}