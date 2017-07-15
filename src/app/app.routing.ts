import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { AboutComponent } from './about/about.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { AdminComponent } from './admin/admin.component';
import { ClubListComponent } from './club-list/club-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ClubListComponent
  },
  {
    path: 'clubs/:clubId',
    component: MemberListComponent
  },
  {
    path: 'clubs/:clubId/about',
    component: AboutComponent
  },
  {
    path: 'clubs/:clubId/members/:memberId',
    component: MemberProfileComponent
  },
  {
    path: 'clubs/:clubId/admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
