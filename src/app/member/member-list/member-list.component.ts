import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../member.service";
import {Member} from "../../domain/member.domain";
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  arrayMembers: [Member];
  constructor(private memberService: MemberService, private route :ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data:Data) => {
          this.arrayMembers = data['members'];
        }
      );
  }


}
