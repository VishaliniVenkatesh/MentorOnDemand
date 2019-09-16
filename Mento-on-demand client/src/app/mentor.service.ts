import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from  './Login';
import { Observable } from 'rxjs';
import { User } from './User';
import {Admin } from './Admin';
@Injectable({
  providedIn: 'root'
})
export class MentorService {
 
 baseLoginUrl= 'http://localhost:8089/api/login/get';
  getMentorCredentials(): Observable<any> {
    return this.http.get<any>(`${this.baseLoginUrl}`+`/Mentor`);
  }
  
  getUserCredentials(): Observable<any> {
    return this.http.get<any>(`${this.baseLoginUrl}`+`/User`);
  }

  insertCredentials(credential: Login):Observable<object> {
    return this.http.post(`${this.baseUrl}` + `/credentials`, credential);
  }

  constructor(private http: HttpClient) { }
  private baseUrl= 'http://localhost:8089/api/mentor';
  getCompletedTrainings(mentor_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}`+ `/getCompleted/${mentor_id}`);
  }

  getOnProgressTrainings(mentor_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}`+`/getOnProgress/${mentor_id}`);
  }
  private baseUrlMentorProposal='http://localhost:8089/api/trainings'
  getMentorProposals(mentor_id:number): Observable<any> {
    return this.http.get(`${this.baseUrlMentorProposal}`+`/viewProposals/${mentor_id}`);
  }

  private baseUrlMentor = 'http://localhost:8089/api/mentor/getDetails';
  getMentorById(mentor_id: number): Observable<any> {
    return this.http.get(`${this.baseUrlMentor}/${mentor_id}`);
  }
  private baseUrl3 = 'http://localhost:8089/api/trainings/getApprove';
  approveProposal(tid:number,value:any): Observable<Object> {
    return this.http.put(`${this.baseUrl3}/${tid}`,value);
  }
  
  private baseUrl2 = 'http://localhost:8089/api/trainings/rejectProposal/5';
  deleteProposal( value: any): Observable<any> {
    return this.http.put(`${this.baseUrl2}`, value);
  }

  private baseUrl4 = 'http://localhost:8089/api/user';
  getApproveProposals(): Observable<any> {
    return this.http.get(`${this.baseUrl4}`+`/viewResponses`);
  }

  private baseUrl5='http://localhost:8089/api/getSkillsByName';
  getMentorBySkill(skill_name: String): Observable<any> {
    return this.http.get(`${this.baseUrl5}/${skill_name}`);
  }
  private baseUrl6='http://localhost:8089/api/admin/mentor/getDetails';
  getAllMentor(): Observable<any> {
    return this.http.get(`${this.baseUrl6}`);
  }

  private baseUrl7='http://localhost:8089/api/admin/user/getDetails';
  getAllUser(): Observable<any> {
    return this.http.get(`${this.baseUrl7}`);
  }
  registerUser(user: Object): Observable<any> {
    return this.http.post(`${this.baseUrl4}`+`/detail/create`,user);
  }
  registerMentor(mentor: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`+`/detail/create`,mentor);
  }

}