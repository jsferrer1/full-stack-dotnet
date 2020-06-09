import { Component } from '@angular/core'
import { QuestionComponent } from './question.component'

@Component({
  selector: 'app-root',
  template: 'my app <question></question>'
})
export class AppComponent {
  title = 'my app';
}
