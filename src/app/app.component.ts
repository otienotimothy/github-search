import { Component } from '@angular/core';
import { FetchService } from './services/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gitsearch';

  randomUrl = 'https://api.github.com/users';

  constructor(private fetch: FetchService) {
    this.fetch
      .fetchUsers(this.randomUrl)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
