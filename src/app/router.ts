import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MemberEditComponent} from "./member/member-edit/member-edit.component";
import {MemberListComponent} from "./member/member-list/member-list.component";
import {MemberDetailsComponent} from "./member/member-details/member-details.component";
import {MemberCreateComponent} from "./member/member-create/member-create.component";
import {MembersResolverService} from "./resolvers/membersResolver.service";

const routes: Routes = [
  {path: '', redirectTo: '/memberList', pathMatch: 'full'},
  {path: 'memberList', resolve: {members:MembersResolverService}, component: MemberListComponent},
  {path: 'memberCreate', component: MemberCreateComponent},
  {path: 'memberDetails', component: MemberDetailsComponent},
  {path: 'memberEdit', component: MemberEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouter {

}
