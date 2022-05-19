import { Component, OnInit } from '@angular/core';
import { ConfigLoaderService } from './config-loader.service';

export interface GridRowData {
  id: number;
  city: string;
  state: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public title = '';

  constructor(private configLoaderService: ConfigLoaderService) {
  }

  ngOnInit() {
    this.title = this.configLoaderService.appTitle;
  }
}
