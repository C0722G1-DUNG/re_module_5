import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListFuramaComponent } from './list-furama/list-furama.component';
import { UpdateFuramaComponent } from './update-furama/update-furama.component';
import { CreateFuramaComponent } from './create-furama/create-furama.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListContractComponent } from './list-contract/list-contract.component';
import { CreateContractComponent } from './create-contract/create-contract.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
