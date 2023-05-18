import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-edit-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrls: ['./add-edit-expense.component.scss'],
})
export class AddEditExpenseComponent implements OnInit {
  navbarBackgroundColor: string = 'brown';
  categoryOptions = [
    'Health',
    'Transport',
    'Grocery',
    'DineOut',
    'Bills',
    'Shopping',
  ];
  description: string = '';
  startDate = new Date();
  amount: string = '';
  email: string = '';
  category: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
