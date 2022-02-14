import { Component } from '@angular/core';
import { Search } from './blueprint/search';
import { FetchService } from './services/fetch.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = new User('', '', '', '', '', '', false, 0, 0, new Date());
  errorMsg!: number;
  loading: boolean = true;

  constructor(private fetch: FetchService) {}

  gitSearch(formData: Search) {
    console.log(formData);
    if (formData.searchType === 'users') {
      let url = `https://api.github.com/users/${formData.searchTerm}`;
      this.fetch
        .fetchData(url)
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
        .catch((err) => {
          console.error(err);
          this.errorMsg = err.status;
        });
    }

    if (formData.searchType === 'repositories') {
      let url = `https://api.github.com/search/repositories?q=${formData.searchTerm}/`;
      this.fetch.fetchData(url).then((res) => console.log(res));
    }

    this.loading = false;
  }
}
