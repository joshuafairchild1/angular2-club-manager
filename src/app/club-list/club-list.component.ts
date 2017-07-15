import { Component, DoCheck } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ClubService } from './../club.service';
import { Router } from '@angular/router';
import { Club } from './../club.model';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css'],
  providers: [ClubService]
})
export class ClubListComponent implements DoCheck {
  clubs: FirebaseListObservable<any[]>;

  constructor(
    private clubService: ClubService,
    private router: Router
  ) {}

  ngDoCheck(): void {
    this.clubs = this.clubService.getClubs();
  }

}
