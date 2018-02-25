import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.css']
})
export class ShopViewComponent implements OnInit {

  public itemList: Array<string> = [
    'A',
    'B',
    'C'
  ];

  constructor() { }

  ngOnInit() {
  }

  addNewItemToList() {
    
  }

}
