import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  tabsList: TabComponent[] = [];

  ngAfterContentInit(): void {
    this.tabsList = this.tabs.toArray();
    this.tabsList.filter((tab) => tab.active).length === 0 &&
      this.selectTab(this.tabs.first);
  }

  selectTab(tab: TabComponent) {
    this.tabsList.forEach((tab) => (tab.active = false));
    tab.active = true;
  }
}
