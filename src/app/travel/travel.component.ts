import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Travel } from '../travel'

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  title='Travel Planner';

  travels=[
  new Travel('Malindi',1,"Go Swimming"),
  new Travel('Mombasa',2,'Go to the beach'),
  new Travel('Kwale',3,'Go to Gedi Ruins'),
  new Travel('Lamu',4,'Go snorkelling'),
]

Travelled(isDone,index){
  if(isDone){
    this.travels.splice(index,1);
  }
}

toogle(index){
        this.travels[index].showDescription = !this.travels[index].showDescription;

    }

    constructor() {}

  ngOnInit() {
  }

}
