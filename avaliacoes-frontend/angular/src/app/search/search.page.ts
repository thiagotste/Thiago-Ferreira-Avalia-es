import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  legends: Array<string> = [];
  searchInput: string;
  results = [];

  ngOnInit() {
    this.legends = legends;
  }

  onSearch() {
    console.log(`Search: ${this.searchInput}`);
    this.legends.includes(this.searchInput);
    console.log(this.legends.includes(this.searchInput));
  }

}
