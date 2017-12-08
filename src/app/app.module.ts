import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRouter} from './router';
import {FormsModule} from "@angular/forms";
import { MemberComponent } from './member/member.component';
import { MemberDetailsComponent } from './member/member-details/member-details.component';
import {MemberService} from "./member.service";
import {MemberListComponent} from "./member/member-list/member-list.component";
import {MemberEditComponent} from "./member/member-edit/member-edit.component";
import { MemberCreateComponent } from './member/member-create/member-create.component';
import { MemberListItemComponent } from './member/member-list/member-list-item/member-list-item.component';
import {MembersResolverService} from "./resolvers/membersResolver.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberListComponent,
    MemberEditComponent,
    MemberComponent,
    MemberDetailsComponent,
    MemberCreateComponent,
    MemberListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouter
  ],
  providers: [MemberService,
  MembersResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
