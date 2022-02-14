import { Component } from '@angular/core';
import { FetchService } from './services/fetch.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = new User('','','','','','',false, 0,0, new Date())

  login = 'otienotimothy';

  constructor(private fetch: FetchService) {
    this.fetch
      .fetchUser(this.login)
      .then((res) => {
        console.log(res);
        this.user.username = res.login;
        this.user.name = res.name;
        this.user.avatarUrl = res.avatar_url;
        this.user.bio = res.bio;
        this.user.location = res.location;
        this.user.repos = res.public_repos;
        this.user.hireable = res.hireable;
        this.user.followers = res.followers;
        this.user.following = res.following;
        this.user.createdAt = new Date(res.created_at);
        console.log(this.user);
      })
      .catch((err) => console.error(err));
  }

  fetchUser() {
    this.fetch.fetchUser(this.login).then((res) => {
      this.user.username = res.login;
      this.user.name = res.name;
      this.user.avatarUrl = res.avatar_url;
      this.user.bio = res.bio;
      this.user.location = res.location;
      this.user.repos = res.public_repos;
      this.user.hireable = res.hireable;
    });
  }
}
