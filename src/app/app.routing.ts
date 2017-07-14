import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: "",
    component: MemberListComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
