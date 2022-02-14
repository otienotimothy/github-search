import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../../search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() gitSearch = new EventEmitter()

  search = new Search('', '');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.search);
    this.gitSearch.emit(this.search)
  }

}
