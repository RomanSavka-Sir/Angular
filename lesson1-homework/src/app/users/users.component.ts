import {Component, OnInit} from '@angular/core';
import {cars} from '../database/data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  cars = cars;

  constructor() {
  }

  ngOnInit(): void {
  }
}
