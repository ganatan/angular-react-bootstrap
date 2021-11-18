import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleBootstrapRoutingModule } from './example-bootstrap-routing.module';
import { ExampleBootstrapComponent } from './example-bootstrap.component';

@NgModule({
  declarations: [
    ExampleBootstrapComponent,
  ],
  exports: [
    ExampleBootstrapComponent,
  ],
  imports: [
    CommonModule,
    ExampleBootstrapRoutingModule
  ]
})
export class ExampleBootstrapModule { }
