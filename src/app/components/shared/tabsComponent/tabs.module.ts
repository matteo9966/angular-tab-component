import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [TabComponent,TabsComponent],
  imports: [
    CommonModule
  ],
  exports:[TabsComponent,TabComponent]
})
export class TabsModule { }
