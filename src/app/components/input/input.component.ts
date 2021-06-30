import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Globals } from 'src/app/services/globals';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string = "";
  @Input() disabled: boolean = false;
  @Input() inputValue: string = "";
  @Output() outputValue = new EventEmitter<string>();

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

  onChange(val: string) {
    this.outputValue.emit(val);
  }
}