import {Member} from './domain/member.domain';
import {Http} from "@angular/http";

export class MemberService {
  constructor(private http: Http){}

  createMember(member: Member) {
    return this.http.post('https://familywebappbackend.herokuapp.com/member', member);
  }

  updateMember(id: string, member: Member) {
    return this.http.put('https://familywebappbackend.herokuapp.com/member/' + id , member);
  }

  deleteMember(id: string) {
    return this.http.delete('https://familywebappbackend.herokuapp.com/member' + id);
  }

  getMember(id: Member) {
    return this.http.get('https://familywebappbackend.herokuapp.com/member/' + id);
  }

  getMembers(){
    return this.http.get('https://familywebappbackend.herokuapp.com/member');
  }
}
