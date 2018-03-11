import { ShopRemoveItemService } from './shop-view/shop-remove-item.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ShopViewComponent } from './shop-view/shop-view.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ShopViewComponent,
    ShopListComponent,
    ShopGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ShopRemoveItemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
