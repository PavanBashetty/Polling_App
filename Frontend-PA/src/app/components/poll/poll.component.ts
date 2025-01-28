import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Poll } from '../../model/interface/poll';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  imports: [FormsModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.scss'
})
export class PollComponent {

  polls: Poll[] = [];
  newPoll:Partial<Poll> = {
    question:'',
    options: [
      {optionText:'', voteCount:0},
      {optionText:'', voteCount:0}
    ]
  };

  constructor(private apiService:ApiService){}

  ngOnInit(){
    this.loadPolls();
  }

  loadPolls(){
    this.apiService.getPolls().subscribe({
      next:(data:Poll[])=>{
        this.polls = data;
      },
      error:(error)=>{console.error(error)}
    })
  }

  createPoll(){
    this.apiService.createPoll(this.newPoll).subscribe({
      next:(createdPoll:Poll)=>{
        this.polls.push(createdPoll);
        //this.loadPolls();
        this.resetPoll();
      },
      error:(error)=>{console.error(error)}
    })
  }

  resetPoll(){
    this.newPoll = {
      question:'',
      options: [
        {optionText:'', voteCount:0},
        {optionText:'', voteCount:0}
      ]
    };
  }

}
