import { Http } from '@angular/http';
import { EventEmitter, Output, Injectable } from '@angular/core';

@Injectable()
export class ShopRemoveItemService {
    @Output()
    public removeItem: EventEmitter<string> = new EventEmitter<string>();

    // constructor(private http: Http) {

    // }

    public removeItemHandler(itemToRemove: string) {
        this.removeItem.emit(itemToRemove);
    }
}