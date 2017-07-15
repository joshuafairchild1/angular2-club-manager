import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { MemberService } from './../member.service';
import { ClubService } from './../club.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from './../member.model';
import { Club } from './../club.model';


@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  providers: [MemberService]
})
export class MemberProfileComponent implements OnInit {
  clubId: string;
  memberId: string;
  memberObservable: FirebaseObjectObservable<any>;
  clubObservable: FirebaseObjectObservable<any>;
  localMember: any;
  localClub: any;

  constructor(
    private memberService: MemberService,
    private clubService: ClubService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.params.forEach(param => {
      this.memberId = param['memberId'];
      this.clubId = param['clubId'];
      this.memberObservable = this.memberService.getMemberById(this.memberId);

      this.memberObservable.subscribe(data => {
        this.localMember = data;
      });

      this.clubObservable = this.clubService.getClubById(this.clubId);

      this.clubObservable.subscribe(data => {
        this.localClub = data;
      });
    });
  }

}
