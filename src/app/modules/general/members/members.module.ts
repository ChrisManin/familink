import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersComponent } from './members.component';
import { MembersRoutingModule } from './members-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule
  ],
  exports: [
    MembersComponent
  ],
  declarations: [
    MembersComponent
  ],
  providers: [
  ],
})
export class MembersModule { }
