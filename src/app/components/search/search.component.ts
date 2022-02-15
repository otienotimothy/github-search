import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../../blueprint/search'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() submitData = new EventEmitter()

  search = new Search('', '');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitData.emit(this.search)
  }

}
