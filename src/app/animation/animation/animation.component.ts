import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'
//trigger : to initiate transition
//state : the change of state/position
//transition : A transition occurs when an element changes from one state to another
//animate : when following certain transition rule from x to y or same 
//style : how to define state

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger("growUp", [state("kid", style({ 'color': 'red',transform:'scale(1)'})),
    state("elder", style({ 'color': 'green', transform:'scale(4)' })),
    transition('kid <=> elder', animate('150ms ease-in-out'))])
  ]
})

export class AnimationComponent implements OnInit {

defaultState:String='kid'


  constructor() { }

  ngOnInit() {

  }

  animateMe(){
    this.defaultState= this.defaultState=='elder'?'kid':'elder'
  }


}
