import { Component } from '@angular/core';
import { Config } from '../models/config';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
  config$: Observable<Config[]> | null = null;
  displayedColumns: string[] = ['heroesUrl', 'textfile', 'date'];

  constructor(private configService: ConfigService) {
    this.showConfig();
  }

  showConfig() {
    this.config$ = this.configService.getConfig();
  }
}
