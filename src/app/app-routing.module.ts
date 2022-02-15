import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'repos/:user', component: UserReposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
