import { HttpModule, Http, Response } from '@angular/http';
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  private mod : any = [];

  constructor(private http: Http) {}

  getJson() {
    this.http.get('tsconfig.json').subscribe((res:Response) => { const json = res.json();
        console.log(this.mod);
        this.mod = json.compilerOptions;
        }
    );
}

  getJsonFromApi() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').
    subscribe((res:Response) => {
        const json = res.json();
        console.log(json);
        this.mod = json;
        }
    );
  }

  ngOnInit() {
    this.getJsonFromApi();
  }

}
