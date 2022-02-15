import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';
import { Repo } from '../../blueprint/repos';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css'],
})
export class UserReposComponent implements OnInit {
  repos: Repo[] = [];
  user!: string

  constructor(private route: ActivatedRoute, private fetch: FetchService) {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.user = params['user']
      let url = `https://api.github.com/users/${params['user']}/repos`;
      this.repos = [];
      this.fetch
        .fetchData(url)
        .then((res: Array<any>) => {
          console.log(res);
          res.forEach((repo, index) => {
            let repoItem: any;
            if (index < 9) {
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
        .catch((err) => console.log(err));
    });
  }

  ngOnInit(): void {}
}
