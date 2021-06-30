import { Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { Globals } from './services/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  public inputs: InputComponent.Input[] = [];
  public results: InputComponent.Input[] = [];
  public values: string[] = [];
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
    this.inputs.push(
      {
        label: index + "° número",
        output: (value: string, i: number) => {
          this.values[i] = value;
        },
        input: ""
      }
    );
  }

  getTarget(val: string) {
    this.target = val;
  }

  addNewInput(event: any) {
    this.addInput(this.inputs.length + 1);
  }

  combineFields(event: any) {
    this.results = [];
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
      this.results.push({
        label: "",
        output: (value: string, i: number) => {
        },
        input: s.toString()
      })
    }
  }

  clearFields(event: any) {
    this.inputs = [];
    this.results = [];
    this.addInput(1);
    this.addInput(2);
    this.target = "";
  }
}

export namespace InputComponent {
  export interface Input {
    label: string,
    output: (value: string, index: number) => void,
    input: string,
  }
}