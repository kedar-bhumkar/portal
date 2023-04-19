import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DCCService {
  private payloadUrl = "api/payloads/";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) {}

  getLandingPageData(id:any): Observable<any> {
    console.log("Inside getLandingPageData.....");
    //@todo optimize to avoid repeated ws calls on multiple invocations
    //https://blog.danieleghidoli.it/2020/10/28/angular-how-to-prevent-duplicated-http-requests/

    return this.http.get<any>(this.payloadUrl+id);
  }

  
  
  getAppSelectorData(id:any): Observable<any> {
    
    console.log("Inside getAppSelectorData.....");
    //@todo optimize to avoid repeated ws calls on multiple invocations
    //https://blog.danieleghidoli.it/2020/10/28/angular-how-to-prevent-duplicated-http-requests/

    return this.http.get<any>("api/appselector/" + id);
  }
}
