import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ClubService } from './../club-manager.service';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [ClubService]
})
export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(
    private clubService: ClubService
  ) { }

  ngOnInit() {

  }

  ngDoCheck() {
    this.members = this.clubService.getMembers();
  }

}
