/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core'
import { AppState } from './app.service'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public name = 'gh-profile:viewer'
  public url = 'https://github.com/1ambda/gh-profile'

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state)
  }
}
