import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ClubService } from './../club-manager.service';
import { Router } from '@angular/router';
import { Member } from './../member.model';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [ClubService]
})
export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  editingMember: Member = null;

  constructor(
    private clubService: ClubService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    this.members = this.clubService.getMembers();
  }

  startEditing(memberToEdit: Member): void {
    this.editingMember = memberToEdit;
  }

  endEditing(): void {
    this.editingMember = null;
  }

}
