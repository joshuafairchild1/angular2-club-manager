import { Component, OnInit, DoCheck } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { MemberService } from './../member.service';
import { ClubService } from './../club.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from './../member.model';
import { Club } from './../club.model';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService, ClubService]
})
export class MemberListComponent implements OnInit, DoCheck {
  memberKeys: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  clubId: string;
  nameFilter: string;
  editingMember: Member = null;
  members: Member[] = [];
  club: any;

  constructor(
    private memberService: MemberService,
    private clubService: ClubService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.params.forEach(param => {
      this.clubId = param['clubId'];
    });

    this.memberKeys = this.memberService.getClubMemberKeys(this.clubId);

    this.memberKeys.subscribe(data => {
      this.members = [];
      data.forEach(key => {
        this.memberService.getMemberById(key.$key).subscribe(member => {
          this.members.push(member);
        });
      });
    });
  }

  ngDoCheck(): void {
    this.clubService.getClubById(this.clubId).subscribe(data => {
      this.club = data;
    });

  }

  startEditing(memberToEdit: Member): void {
    this.editingMember = memberToEdit;
  }

  endEditing(): void {
    this.editingMember = null;
  }

}
