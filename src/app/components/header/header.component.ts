import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from 'src/app/search';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() gitSearch  = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  passFormData(formData: Search){
    this.gitSearch.emit(formData)
  }

}
