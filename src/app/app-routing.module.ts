import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { TryoutComponent } from './component/tryout/tryout.component';
import { WeatherComponent } from './component/weather/weather.component';
import { ExpenseComponent } from './component/expense/expense.component';
import { AddEditExpenseComponent } from './component/expense/add-edit-expense/add-edit-expense.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'try', component: TryoutComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'addExpense', component: AddEditExpenseComponent },
  { path: 'addExpense/:id', component: AddEditExpenseComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
