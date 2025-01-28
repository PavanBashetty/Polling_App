import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Poll } from '../../model/interface/poll';

@Component({
  selector: 'app-poll',
  imports: [],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.scss'
})
export class PollComponent {

  polls: Poll[] = [];

  constructor(private apiService:ApiService){}

  ngOnInit(){
    this.loadPolls();
  }

  loadPolls(){
    this.apiService.getPolls().subscribe({
      next:(data:Poll[])=>{
        console.log(data);
        this.polls = data;
      },
      error:(error)=>{console.error(error)}
    })
  }
}
