import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  
  goals:Goal [] =[
 new Goal (1, 'Academic Diary','write your Academic daily progress',"my diary", new Date()),
  new Goal(2,'Food Diary','Write how your daily food was',          "my diary", new Date()),
  new Goal(3, 'Secret Diary','Write your life',                     "my diary",  new Date()),
    ];
    toggleDetails(index){
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }
    constructor(){}
  ngOnInit(){}
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }


  }

