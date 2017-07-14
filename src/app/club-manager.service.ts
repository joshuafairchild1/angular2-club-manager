import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from './member.model';

@Injectable()
export class ClubService {
  members: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.members = database.list(`members`);
  }

  getMembers(): FirebaseListObservable<any[]> {
    return this.members;
  }

  getMemberById(memberId: string): FirebaseObjectObservable<any> {
    return this.database.object(`members/${memberId}`);
  }

  addMember(newMember: Member): void {
    this.members.push(newMember);
  }

}
