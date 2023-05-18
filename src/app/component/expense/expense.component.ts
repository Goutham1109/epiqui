import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent implements OnInit {
  data = [
    {
      name: 'g1',
      age: '22',
      mail: 'aa',
    },
    {
      name: 'g2',
      age: '22',
      mail: 'aa',
    },
    {
      name: 'g3',
      age: '22',
      mail: 'aa',
    },
  ];

  constructor(private router: Router) {}
  navbarBackgroundColor: string = '#FF0000'; // Set the initial color value

  ngOnInit(): void {
    this.updateNavbarColor();
  }

  addExp() {
    this.router.navigate(['/home']);
  }

  updateNavbarColor(): void {
    console.log('HII');
    this.navbarBackgroundColor = '#000080    '; // Set the desired color value
  }

  edit(id: string) {
    console.log(id);
    this.router.navigate(['/addExpense/', id]);
  }
}
