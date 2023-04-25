import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SinhvienService } from 'src/app/Service/sinhvien.service';

@Component({
  selector: 'app-sinhvien-create',
  templateUrl: './sinhvien-create.component.html',
  styleUrls: ['./sinhvien-create.component.css']
})
export class SinhvienCreateComponent {
  constructor(private sv:SinhvienService) {}
  Themmoi = new FormGroup({
    ma_sv: new FormControl(''),
    ten_sv: new FormControl(''),
    gioitinh_sv: new FormControl(''),
    ngaysinh_sv: new FormControl(''),
    diachi_sv: new FormControl(''),
    sdt_sv: new FormControl('123'),
    ma_lop: new FormControl('123'),
  }); 
  Addnew()
  {
   // alert('thêm mới đúng không');
   // console.log(this.Themmoi.value) xuất giá trị value bên trong input
   this.sv.Store(this.Themmoi.value).subscribe(res=>{
  console.log(res);
   })
  }
  }
