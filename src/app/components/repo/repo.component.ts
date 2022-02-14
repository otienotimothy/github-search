import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../blueprint/repos';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() repo!:Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
