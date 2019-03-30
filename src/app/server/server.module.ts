// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { ServerComponent } from './server.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ServerComponent],
  exports: [ServerComponent]
})
export class ServerModule {}
