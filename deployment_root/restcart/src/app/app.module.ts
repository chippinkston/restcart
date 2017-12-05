import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AdminComponent } from './admin/admin.component';
import {UserService} from "./user.service";
import {WidgetService} from "./widget.service";
import {OrderService} from "./order.service";
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    OrdersComponent,
    WidgetsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService,
    WidgetService,
    OrderService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
