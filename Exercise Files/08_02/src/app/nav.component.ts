import { Component } from '@angular/core'

@Component({
  selector: 'nav',
  template: `
    <md-toolbar>
        <button md-button routerLink="/">Quiz</button>
        <span style="flex: 1 1 auto;"></span>
        <button md-button routerLink="/register">Register</button>
    </md-toolbar>
  `
})
export class NavComponent {
}
