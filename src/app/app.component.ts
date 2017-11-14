import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { ListPage } from '../pages/list/list'
import { AboutUsPage } from '../pages/about-us/about-us'
import { ProfilePage } from '../pages/profile/profile'
import { RegisterPartyPage } from '../pages/register-party/register-party'

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav

  rootPage: any = ListPage

  pages: Array<{title: string, component: any}>

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp()

    this.pages = [
      { title: 'Festas', component: ListPage },
      { title: 'Cheguei na festa', component: RegisterPartyPage },
      { title: 'Perfil', component: ProfilePage },
      { title: 'Sobre nós', component: AboutUsPage }
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {  
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    });
  }

  openPage(page) {
    this.nav.push(page.component)
  }
}
