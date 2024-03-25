import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config/config.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    ConfigComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    AppMaterialModule
  ]
})
export class ConfigModule { }
