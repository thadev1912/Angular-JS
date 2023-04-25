import { Component } from '@angular/core';
import { SinhvienService } from 'src/app/Service/sinhvien.service';

@Component({
  selector: 'app-sinhvien-create',
  templateUrl: './sinhvien-create.component.html',
  styleUrls: ['./sinhvien-create.component.css']
})
export class SinhvienComponent {
    constructor(private sv:SinhvienService) {}
  
  }
