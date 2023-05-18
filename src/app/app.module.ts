import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TryoutComponent } from './component/tryout/tryout.component';
import { WeatherComponent } from './component/weather/weather.component';
import { TodoComponent } from './component/todo/todo.component';
import { ExpenseComponent } from './component/expense/expense.component';
import { AddEditExpenseComponent } from './component/expense/add-edit-expense/add-edit-expense.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    TryoutComponent,
    WeatherComponent,
    TodoComponent,
    ExpenseComponent,
    AddEditExpenseComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatNativeDateModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
