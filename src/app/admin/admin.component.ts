import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { ClubService } from './../club-manager.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClubService]
})
export class AdminComponent implements OnInit {

  constructor(
    private clubService: ClubService
  ) { }

  ngOnInit(): void {
  }

  memberAdded(name: string, age: string, role: string, imgUrl: string): void {
    const newMember: Member = new Member(name, Number(age), role, imgUrl);
    this.clubService.addMember(newMember);
  }

}
