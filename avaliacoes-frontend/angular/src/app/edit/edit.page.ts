import { Component } from '@angular/core';
import { NameListService } from '../names/nameslist.service';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
  legends: Array<string> = [];
  isEditing: boolean;
  name: String;
  nameEdited: String;

  constructor(private nameList: NameListService) {
    this.legends = nameList.listOut;
    this.isEditing = false;
  }

  edit(item: string): void {
    this.name = '';
    this.isEditing = true;
    this.name = item;
    this.nameEdited = item;
  }

  save(itemEdited: string, item: string): void {
    let index = this.legends.indexOf(item);
    this.legends.splice(index, 1, itemEdited);
    this.nameList.listIn = this.legends;
  }

  closeSave() {
    this.name = '';
  }
}


