import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Member} from "../../domain/member.domain";
import {MemberService} from "../../member.service";

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
  }

  onSubmit(){
    let member = new Member(this.signupForm.value.firstName, this.signupForm.value.middelName, this.signupForm.value.lastName);
    this.memberService.createMember(member);
    this.router.navigate(['/memberList']);
  }
}
