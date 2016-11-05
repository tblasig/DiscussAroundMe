import { Component } from '@angular/core';

import { MessagePage } from '../Message/message';
import { FriendPage } from '../Friend/friends';
import { SettingPage } from '../Setting/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MessagePage;
  tab2Root: any = SettingPage;
  tab3Root: any = FriendPage;

  constructor() {

  }
}
