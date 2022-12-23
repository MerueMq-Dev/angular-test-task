import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiFieldErrorPipeModule, TuiInputFilesModule, TuiProgressModule, TuiStepperModule, TuiTextAreaModule } from '@taiga-ui/kit';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InputsFilesComponent } from './inputs-files/inputs-files.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmptyComponent } from './empty/empty.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    InputsFilesComponent,
    EmailFormComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiStepperModule,
    TuiTextAreaModule,
    TuiProgressModule,
    TuiFieldErrorPipeModule,
    TuiButtonModule,
    TuiInputFilesModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
