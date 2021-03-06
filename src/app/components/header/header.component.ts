import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../../blueprint/search';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  heroImgUrl:string = "../../../assets/Octocat.png";

  @Output() gitSearch = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  passFormData(formData: Search) {
    this.gitSearch.emit(formData);
  }
}
