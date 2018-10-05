import { Component } from '@angular/core';
import {legends} from '../names/nameslist';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  private legends: Array<string> = [];
  constructor() {
    this.legends = legends;
  }

  ngOnInit() {}

  public getNames(): String[] {
    return this.legends;
  }
}
