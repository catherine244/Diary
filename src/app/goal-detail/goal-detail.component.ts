import { Component, OnInit,Input ,Output,EventEmitter } from '@angular/core';
import{Goal} from '../goal'
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  numberoflikes : number=0
  numberofdislikes : number=0

likebuttonclick(){
  this.numberoflikes++;
}
dislikebuttonclick(){
  this.numberofdislikes++;
}
  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();
  
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }



  ngOnInit() {
  }

}
