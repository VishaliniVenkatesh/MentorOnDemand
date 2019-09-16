import { Component, OnInit, Input } from '@angular/core';
import { MentorService } from '../Mentor.service';
import { Trainings } from '../Trainings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-response-for-proposals',
  templateUrl: './response-for-proposals.component.html',
  styleUrls: ['./response-for-proposals.component.css']
})
export class ResponseForProposalsComponent implements OnInit {

  
  @Input() trainings: Trainings; 

  proposals : Observable<Trainings[]>;
  constructor(private mentorservice: MentorService) { }

  ngOnInit() {
    this.reloadData();
  }

  approveProposal(tid:number,isApprove: String) {
    this.mentorservice.approveProposal(tid,{status: "Approve" })
      .subscribe(
        data => {
          console.log(data);
          this.trainings = data as Trainings;
        },
        error => console.log(error));
  }

  rejectProposal(isApprove: String) {
    this.mentorservice.deleteProposal({status: isApprove})
      .subscribe(
        data => {
          console.log(data);
          this.trainings = data as Trainings;
        },
        error => console.log(error));
  }

  reloadData() {
  
    this.proposals = this.mentorservice.getApproveProposals();
   }

}
