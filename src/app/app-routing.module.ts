import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AdminBoardComponent } from './components/admin-board/admin-board.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/login', pathMatch: 'full' },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminBoardComponent,

    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'etudiant', redirectTo : 'etudiant/list' , pathMatch : 'full' },
      { path: 'etudiant/list', component: ListStudentsComponent },
      { path: 'etudiant/add', component: AddStudentComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
