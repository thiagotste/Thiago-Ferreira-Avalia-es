import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

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

  constructor() {
    this.legends = legends;
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
    legends.splice(index, 1, itemEdited);
  }

  closeSave() {
    this.name = '';
  }
}


