import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SinhvienComponent } from './Component/sinhvien/sinhvien.component';
import { LienheComponent } from './Component/lienhe/lienhe.component';
import { HttpClientModule } from '@angular/common/http';
import { ChaComponent } from './Component/cha/cha.component';
import { ConComponent } from './Component/con/con.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SinhvienCreateComponent } from './Component/sinhvien-create/sinhvien-create.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SinhvienComponent,
    LienheComponent,
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
