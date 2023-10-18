import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  users$: Observable<any>;


  constructor(private httpClientService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.httpClientService.getUsers();
  }
}
