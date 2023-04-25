import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sinhvien} from '../Models/sinhvien'
import { Observable } from 'rxjs';
//const api='http://localhost:8080/sinhvien/get_api';
@Injectable({
  providedIn: 'root'
})

export class SinhvienService {

  constructor(private http:HttpClient) { }  //httpClient tương tự như axiois hỗ trơ phương thức http

  //List
   getSinhvien():Observable<any>{
    return this.http.get<any>('http://localhost:8080/sinhvien/get_api');
   }
   //Stote
   Store(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:8080/sinhvien/store_api',data);
   }
   //Sửa
   //Xóa
   Delete(id:any):Observable<any>{
    return this.http.delete<any>('http://localhost:8080/sinhvien/delete_api/'+id);
   }
}
