import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private http: HttpClient) {
    console.log("yes");
    this.http.get('http://localhost:8080/esef-0.0.1-SNAPSHOT/test',{responseType: 'text'})
    .subscribe(res => console.log(res));
   }
}
