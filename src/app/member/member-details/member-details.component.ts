import { Component, OnInit } from '@angular/core';
import {Member} from "../../domain/member.domain";

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
member:Member;
  constructor() { }

  ngOnInit() {

  }

}
