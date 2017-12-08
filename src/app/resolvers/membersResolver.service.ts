import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Member} from "../domain/member.domain";
import {Injectable} from "@angular/core";
import {MemberService} from "../member.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MembersResolverService implements  Resolve<any>{
  constructor(private memberService: MemberService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    return this.memberService.getMembers();
  }
}
