import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Club } from './club.model';

@Injectable()
export class ClubService {
  clubs: FirebaseListObservable<any[]>

  constructor(
    private database: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.clubs = database.list(`clubs`);
  }

  getClubs(): FirebaseListObservable<any[]> {
    return this.clubs;
  }

  getClubById(clubId: string): FirebaseObjectObservable<any> {
    return this.database.object(`/clubs/${clubId}`);
  }

}
