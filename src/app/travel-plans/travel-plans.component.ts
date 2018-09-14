import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Travel } from '../travel'


@Component({
  selector: 'app-travel-plans',
  templateUrl: './travel-plans.component.html',
  styleUrls: ['./travel-plans.component.css']
})
export class TravelPlansComponent implements OnInit {

  @Input() travel:Travel;
  constructor() { }

  ngOnInit() {
  }

}
