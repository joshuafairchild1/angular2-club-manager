import { Component, OnInit } from '@angular/core';
import { MemberService } from './../member.service';
import { ClubService } from './../club.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  clubId: string;
  clubObservable: FirebaseObjectObservable<any>;
  localClub: any;

  constructor(
    private memberService: MemberService,
    private clubService: ClubService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.forEach(param => {
      this.clubId = param['clubId'];

      this.clubObservable = this.clubService.getClubById(this.clubId);

      this.clubObservable.subscribe(data => {
        this.localClub = data;
      });
    });
  }

}
