import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { MemberService } from './../member.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  clubId: string;

  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.forEach(param => {
      this.clubId = param['clubId'];
    });
  }

  memberAdded(name: string, age: string, role: string, imgUrl: string): void {
    const newMember: Member = new Member(name, Number(age), role, imgUrl);
    this.memberService.addMember(newMember, this.clubId);
  }

}
