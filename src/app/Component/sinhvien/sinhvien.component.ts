import { Component,OnInit } from '@angular/core';
import { SinhvienService } from 'src/app/Service/sinhvien.service';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit{
  sinhviens:Array<any>=[];
  constructor(private sv:SinhvienService){}
  ngOnInit():void{
    this.sv.getSinhvien().subscribe(res=>{
      this.sinhviens=res;
      console.log(this.sinhviens);
    })
   
  }
  Delete(id:number)
  {
  // alert('Bạn muốn xóa đúng không!!!');
  console.log('Đã xóa thành công!!!');
  } 
  Edit(id:number)
  {
    this.sv.Edit(id).subscribe(res=>{
      this.sinhviens=res;
    })
  }
}
