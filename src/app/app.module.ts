import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ChaComponent } from './Component/cha/cha.component';
import { ConComponent } from './Component/con/con.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SinhvienCreateComponent } from './Component/sinhvien-create/sinhvien-create.component';
import { SinhvienComponent } from './Component/sinhvien/sinhvien.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SinhvienComponent,   
    ChaComponent,
    ConComponent,
    SinhvienCreateComponent,
   

  

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
