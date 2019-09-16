import { Component, OnInit } from '@angular/core';
import { MentorService } from '../Mentor.service';
import { Mentor } from '../Mentor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-mentor',
  templateUrl: './search-mentor.component.html',
  styleUrls: ['./search-mentor.component.css']
})
export class SearchMentorComponent implements OnInit {

  skill_name:String;
  mentors:Mentor[];
  constructor(private dataService: MentorService) { }

  ngOnInit() {
    this.skill_name=null;
  }

  private searchSkill()
  {
    this.dataService.getMentorBySkill(this.skill_name)
    .subscribe(mentors => this.mentors = mentors);
    
  }

  onSubmit() {
    this.searchSkill();
  }

}
