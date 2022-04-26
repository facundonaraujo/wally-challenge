import { Component, OnDestroy, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'
import { Application } from '@nativescript/core'
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer'
import { Subscription } from 'rxjs'
import { User } from './models/user.model'
import { AuthService } from './services/auth.service'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy  {
  private _sideDrawerTransition: DrawerTransitionBase
  user: User | null;
  userSubscribe: Subscription;

  constructor(
    private authService: AuthService,
    private router: RouterExtensions
  ) {}

  ngOnInit() {
    this.userSubscribe = this.authService.user.subscribe({
      next: (resp) => {
        this.user = resp;
      }
    });
    this._sideDrawerTransition = new SlideInOnTopTransition()
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition
  }

  onLogout(){
    this.authService.logout();
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
    this.router.navigate(['/auth/']);
  }

  ngOnDestroy(): void {
    this.userSubscribe?.unsubscribe();
  }
}
