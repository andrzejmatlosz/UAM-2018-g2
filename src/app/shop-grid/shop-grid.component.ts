import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {

  @Input()
  public gridSource: Array<string>;

  @Output()
  public removeItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public removeItemHandler(itemToRemove: string) {
    this.removeItem.emit(itemToRemove);
  }

}
