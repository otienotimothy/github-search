import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() currentUser!:User;

  constructor(private router:Router) { }

  onClick(login: string){
    this.router.navigate(['repos', login])
  }

  ngOnInit(): void {
  }

}
