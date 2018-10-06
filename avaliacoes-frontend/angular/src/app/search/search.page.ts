import { Component, PipeTransform } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements PipeTransform {
  legends: Array<string> = [];
  searchInput: string;
  results = [];

  ngOnInit() {
    this.legends = legends;
  }

  onSearch() {
    this.results = this.transform(this.legends, this.searchInput);
  }
  clearShow() {
    this.results = [];
  }
  transform(items: any[], searchText: string): any[] {
    if (!items || searchText === " " || !searchText) { return []; }

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.toLowerCase().includes(searchText);
    });
  }
}
