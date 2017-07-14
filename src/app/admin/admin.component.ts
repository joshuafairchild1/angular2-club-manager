import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
  }

  memberAdded(name: string, age: string, role: string, imgUrl: string): void {
    const newMember: Member = new Member(name, Number(age), role, imgUrl);
    this.memberService.addMember(newMember);
  }

}
