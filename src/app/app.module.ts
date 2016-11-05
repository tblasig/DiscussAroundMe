import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FriendPage } from '../pages/Friend/friends';
import { SettingPage } from '../pages/Setting/settings';
import { MessagePage } from '../pages/Message/message';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    FriendPage,
    SettingPage,
    MessagePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FriendPage,
    SettingPage,
    MessagePage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
