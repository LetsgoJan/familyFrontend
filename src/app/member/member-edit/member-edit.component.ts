import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Member} from "../../domain/member.domain";
import {MemberService} from "../../member.service";

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  member: Member;
  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
  }

  onSubmit(){
    member = new Member(this.signupForm.value.firstName, this.signupForm.value.middelName, this.signupForm.value.lastName)
    this.memberService.updateMember(member);
    this.router.navigate(['/memberList']);
  }
}
