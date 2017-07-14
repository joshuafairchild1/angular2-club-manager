import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from './member.model';
import { ClubService } from './club.service';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(
    private database: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
    private clubService: ClubService
  ) {
    this.members = database.list(`members`);
  }

  getMembers(): FirebaseListObservable<any[]> {
    return this.members;
  }

  getClubMemberKeys(clubId: string): FirebaseListObservable<any[]> {
    return this.database.list(`clubs/${clubId}/members`);
  }

  getMemberById(memberId: string): FirebaseObjectObservable<any> {
    return this.database.object(`members/${memberId}`);
  }

  addMember(newMember: Member): void {
    this.members.push(newMember);
  }

  updateMember(member: any): void {
    this.database.object(`members/${member.$key}`).update({ name: member.name,
                                                            age: member.age,
                                                            role: member.role,
                                                            image: member.image
                                                          });
  }

  deleteMember(member: any): void {
    this.database.object(`members/${member.$key}`).remove();
  }
}
