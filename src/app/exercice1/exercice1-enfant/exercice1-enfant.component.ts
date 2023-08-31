import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() counter: number;
  @Output() counterEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.counter++;
    this.emitValue();
  }

  decrease() {
    this.counter--;
    this.emitValue();
  }

  emitValue() {
    this.counterEvent.emit(this.counter);
  }

}
