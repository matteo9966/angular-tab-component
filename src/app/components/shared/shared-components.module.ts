import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { InputsModule } from './inputs/inputs.module';
import { TabsModule } from './tabsComponent/tabs.module';

@NgModule({
  declarations: [CardComponent],
  imports: [TabsModule,InputsModule],
  exports: [TabsModule, CardComponent,InputsModule],
})
export class SharedComponentsModule {}
