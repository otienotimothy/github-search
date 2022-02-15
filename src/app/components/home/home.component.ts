import { Component, OnInit } from '@angular/core';
import { Repo } from '../../blueprint/repos';
import { Search } from '../../blueprint/search';
import { FetchService } from '../../services/fetch.service';
import { User } from '../../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}
