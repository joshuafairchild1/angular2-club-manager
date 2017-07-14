import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { AboutComponent } from './about/about.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';

const appRoutes: Routes = [
  {
    path: "",
    component: MemberListComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "members/:id",
    component: MemberProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
