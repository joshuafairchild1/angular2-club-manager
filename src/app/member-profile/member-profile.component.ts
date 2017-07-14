import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ClubService } from './../club-manager.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from './../member.model';


@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  providers: [ClubService]
})
export class MemberProfileComponent implements OnInit {
  memberId: string;
  memberObservable: FirebaseObjectObservable<any>;
  localMember: Member;

  constructor(
    private clubService: ClubService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.params.forEach(param => {
      this.memberId = param['id'];
      this.memberObservable = this.clubService.getMemberById(this.memberId);

      this.memberObservable.subscribe(data => {
        this.localMember = new Member(data.name, data.age, data.role, data.image);
      })
    });
  }

}
