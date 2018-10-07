import { Component } from '@angular/core';
import { NameListService } from '../names/nameslist.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  legends: Array<string> = [];

  constructor(private nameList: NameListService) { }

  ngOnInit() {
    this.legends = this.nameList.listOut;
  }
}
