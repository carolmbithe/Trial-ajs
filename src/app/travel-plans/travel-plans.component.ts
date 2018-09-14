import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Travel } from '../travel'


@Component({
  selector: 'app-travel-plans',
  templateUrl: './travel-plans.component.html',
  styleUrls: ['./travel-plans.component.css']
})
export class TravelPlansComponent implements OnInit {

  @Input() travel:Travel;
  @Output()isDone=new EventEmitter<boolean>();

  Travelled(done:boolean){
  this.isDone.emit(done);

}
  constructor() { }

  ngOnInit() {
  }

}
