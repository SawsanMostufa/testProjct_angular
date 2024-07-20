import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShardRoutingModule } from './shard-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    ShardRoutingModule,
    FormsModule ,
  ],
  exports:[ FooterComponent,
    NavbarComponent,
    HomeComponent,]
})
export class ShardModule { }
