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
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SearchParentComponent } from './search-parent/search-parent.component';
import { SearchChildComponent } from './search-parent/search-child/search-child.component';
import { ViewChildrenParentComponent } from './view-children-parent/view-children-parent.component';
import { ViewChildrenChildComponent } from './view-children-parent/view-children-child/view-children-child.component';
import { NgItemsComponent } from './ng-items/ng-items.component';
import { NgItemsChildComponent } from './ng-items/ng-items-child/ng-items-child.component';
import { ViewChildrenParent1Component } from './view-children-parent1/view-children-parent1.component';
import { ViewChildrenChild1Component } from './view-children-parent1/view-children-child1/view-children-child1.component';
import { BookSerachComponent } from './book-serach/book-serach.component';
import { BookListComponent } from './book-serach/book-list/book-list.component';

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
    ButtonChildComponent,
    SearchEmployeeComponent,
    SearchParentComponent,
    SearchChildComponent,
    ViewChildrenParentComponent,
    ViewChildrenChildComponent,
    NgItemsComponent,
    NgItemsChildComponent,
    ViewChildrenParent1Component,
    ViewChildrenChild1Component,
    BookSerachComponent,
    BookListComponent
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
