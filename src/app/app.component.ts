import { Component } from '@angular/core';
import { FetchService } from './services/fetch.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = new User('','','','','','',false)

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
