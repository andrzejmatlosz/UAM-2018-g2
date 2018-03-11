import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.css']
})
export class ShopViewComponent implements OnInit {

  public isListView: boolean = true;

  public itemList: Array<string> = [];

  public newItem: string;

  constructor() { }

  ngOnInit() {
  }

  public addNewItemToList(): void {
    this.itemList.push(this.newItem);
    this.newItem = '';
  }

  public removeItemFromList(itemToRemove: string): void {
    const index: number = this.itemList.indexOf(itemToRemove);
    if (index >= 0) {
      this.itemList.splice(index, 1);
    }
  }

  public setView(newView: boolean): void {
    this.isListView = newView;
  }

}
