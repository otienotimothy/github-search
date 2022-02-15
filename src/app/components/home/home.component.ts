import { Component, OnInit } from '@angular/core';
import { Repo } from '../../blueprint/repos';
import { Search } from '../../blueprint/search';
import { FetchService } from '../../services/fetch.service';
import { User } from '../../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user = new User('', '', '', '', '', '', false, 0, 0, new Date());
  repos: Repo[] = [];
  errorMsg!: number;
  loading: boolean = true;

  constructor(private fetch: FetchService) {}

  ngOnInit(): void {}

  gitSearch(formData: Search) {
    console.log(formData);
    if (formData.searchType === 'users') {
      let url = `https://api.github.com/users/${formData.searchTerm}`;
      this.fetch
        .fetchData(url)
        .then((res) => {
          console.log(res);
          this.repos = [];
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
          this.errorMsg = err.status;
        });
    }

    if (formData.searchType === 'repositories') {
      let url = `https://api.github.com/search/repositories?q=${formData.searchTerm}/`;
      this.fetch
        .fetchData(url)
        .then((res) => {
          this.user = new User('', '', '', '', '', '', false, 0, 0, new Date());
          console.log(res);
          let response: Array<any> = res.items;
          response.forEach((repo, index) => {
            let repoItem: any;
            if (index < 6) {
              repoItem = new Repo(
                repo.name,
                repo.owner.login,
                repo.html_url,
                repo.description
              );
              this.repos.push(repoItem);
            }
          });
        })
        .catch((err) => {
          this.errorMsg = err.status;
        });
    }

    this.loading = false;
  }
}
