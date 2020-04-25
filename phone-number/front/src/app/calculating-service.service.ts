import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

const BACKEND_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class CalculatingServiceService {
  results;

  constructor(private http: HttpClient,private router: Router) { }

  goCal(input){
    this.http.get<any>(BACKEND_URL + `/calculate`+'?input='+input).subscribe(rep=>{
    this.results=rep;
    console.log(this.results);
    this.router.navigate(["/output"]);
  })
  }
}
