import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdButtonModule, MdInputModule, MdCardModule } from '@angular/material'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'
import { QuestionComponent } from './question.component'

@NgModule({
  declarations: [
    AppComponent, QuestionComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule, 
    MdButtonModule, 
    MdInputModule ,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
