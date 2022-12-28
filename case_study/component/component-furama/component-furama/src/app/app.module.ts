import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListFuramaComponent } from './facility/list-furama/list-furama.component';
import { UpdateFuramaComponent } from './facility/update-furama/update-furama.component';
import { CreateFuramaComponent } from './facility/create-furama/create-furama.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListFuramaComponent,
    UpdateFuramaComponent,
    CreateFuramaComponent,
    ListCustomerComponent,
    UpdateCustomerComponent,
    CreateCustomerComponent,
    ListContractComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
