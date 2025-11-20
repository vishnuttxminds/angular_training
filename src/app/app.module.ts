import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { CartComponent } from './cart/cart.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeViewComponent } from './employee-list/employee-view/employee-view.component';
import { EmplyeeArrayComponent } from './emplyee-array/emplyee-array.component';
import { EmployeeChildComponent } from './emplyee-array/employee-child/employee-child.component';
import { ButtonChildComponent } from './button-child/button-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProfileComponent,
    CounterComponent,
    CartComponent,
    ChildComponent,
    ParentComponent,
    EmployeeListComponent,
    EmployeeViewComponent,
    EmplyeeArrayComponent,
    EmployeeChildComponent,
    ButtonChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
