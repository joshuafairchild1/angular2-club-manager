import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { masterFirebaseConfig } from './api-keys';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { NamePipe } from './name.pipe';
import { ClubListComponent } from './club-list/club-list.component';
import { ClubService } from './club.service';
import { MemberService } from './member.service';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberProfileComponent,
    AboutComponent,
    AdminComponent,
    EditMemberComponent,
    NamePipe,
    ClubListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [ClubService, MemberService],
  bootstrap: [AppComponent]
})

export class AppModule { }
