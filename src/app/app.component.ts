import { Component } from '@angular/core';
import { QueryParamStoreService } from './query-param-store/query-param-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'query-param-store';

  constructor(private store: QueryParamStoreService<any>) {
    store.store.subscribe(console.log);
  }
}
