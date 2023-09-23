import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ManuscriptSubmissionComponent } from './Masters/manuscript-submission/manuscript-submission.component';
import { ManuscriptcontentComponent } from './Masters/manuscriptcontent/manuscriptcontent.component';
import { PasswordresetComponent } from './Masters/passwordreset/passwordreset.component';
import { SubjectcontentComponent } from './Masters/subjectcontent/subjectcontent.component';
import { AuthorComponent } from './author/author.component';
import { EditorComponent } from './editor/editor.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { RoleComponent } from './Masters/Role/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    ManuscriptSubmissionComponent,
    ManuscriptcontentComponent,
    PasswordresetComponent,
    SubjectcontentComponent,
    AuthorComponent,
    EditorComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ReviewerComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,
    CommonModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
