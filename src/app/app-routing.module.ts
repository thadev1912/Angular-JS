import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinhvienComponent } from './Component/sinhvien/sinhvien.component';
import { ChaComponent } from './Component/cha/cha.component';
import { SinhvienCreateComponent } from './Component/sinhvien-create/sinhvien-create.component';




const routes: Routes = [
  {path:'sinhvien',component:SinhvienComponent},
  {path:'them_sinhvien',component:SinhvienCreateComponent},
  {path:'cha',component:ChaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
