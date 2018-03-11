import { ShopRemoveItemService } from '../shop-view/shop-remove-item.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  @Input()
  public listSource: Array<string>;

  @Output()
  public removeItem: EventEmitter<string> = new EventEmitter<string>(); 

  constructor(private shopRemoveItemService: ShopRemoveItemService) { }

  ngOnInit() {
  }

  public removeItemHandler(itemToRemove: string) {
    this.removeItem.emit(itemToRemove);
  }

}
